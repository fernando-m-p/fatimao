"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { DashboardHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getJogo, gravarJogo } from "@/lib/firabase";
import { useEffect, useState } from "react";
import { Jogo, Rodada } from "../../../../../model/interfaces";
import Image from "next/image"
import { nomeTimes, timesMap } from "@/app/jogos";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Layout from "@/app/admin/rodada/[rodada]/jogos/[jogo]/Layout"
import FormFieldTimeComponent from "@/components/FormFieldTime"
import Link from "next/link";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { redirect } from "next/dist/server/api-utils";
import { Icons } from "@/components/icons";
import { Separator } from "@radix-ui/react-select";
import { SelectItemsCatoes } from "@/components/SelectItems";
import { useRouter } from "next/navigation";


const jogoFormSchema = z.object({
    golsMandante: z
        .string()
    ,
    golsVisitante: z
        .string()
    ,
    finalizado: z
        .boolean({
        }),
    eventos: z
        .array(
            z.object({
                nome: z.string(),
                time: z.enum([nomeTimes.Barcelona, nomeTimes.Bayern, nomeTimes.Internazionale, nomeTimes.Real, nomeTimes.Roma, nomeTimes.Nenhum]),
                tipo: z.enum(
                    ["gol", "cartao_amarelo", "cartao_azul", "cartao_vermelho"]
                )
            })
        )
        .optional(),

})

type ProfileFormValues = z.infer<typeof jogoFormSchema>


export default function RodadaPage({ params }: { params: { rodada: string, jogo: string } }) {

    const [rodadasState, setRodadasState] = useState({ jogo: {} } as { jogo: Jogo });
    const id = params.rodada;



    const defaultValues: Partial<ProfileFormValues> = {
        golsMandante: (rodadasState.jogo.mandante ? rodadasState.jogo.mandante.gols.toString() : "0"),
        golsVisitante: (rodadasState.jogo.visitante ? rodadasState.jogo.visitante.gols.toString() : "0"),
        finalizado: (rodadasState.jogo ? rodadasState.jogo.finalizado : false),
        eventos: rodadasState.jogo.eventos,
    }

    const session = useSession();
    const route = useRouter();

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(jogoFormSchema),
        defaultValues,
        mode: "onChange",
    })

    const { fields, append,insert, remove } = useFieldArray({
        name: "eventos",
        control: form.control,
    })

    function onSubmit(data: ProfileFormValues) {
        const jogo = rodadasState.jogo;
        jogo.mandante.gols = parseInt(data.golsMandante);
        jogo.visitante.gols = parseInt(data.golsVisitante);
        jogo.finalizado = data.finalizado;
        if (data.eventos && data.eventos?.length > 0) {
            jogo.eventos = [];
            data.eventos.map((evento,index) =>{
                jogo?.eventos?.push({nome: evento.nome.trim(), time: evento.time, tipo:evento.tipo});
            }) 
        } else {
            jogo.eventos = [];
        }
        gravarJogo({
            rodada: params.rodada,
            idJogo: params.jogo,
            jogo: rodadasState.jogo,
            token: session.data?.user.id_token,
            acess_token: session.data?.user.acess_token
        });
        route.push("/admin");
    }


    const user = session.data?.user;



    useEffect(() => {
        const id = params.rodada;
        const fetchData = async () => getJogo({ rodada: params.rodada, idJogo: params.jogo });

        const result = fetchData().then(
            res => {
                form.setValue("golsMandante", res?.mandante?.gols.toString() || "0");
                form.setValue("golsVisitante", res?.visitante?.gols.toString() || "0");
                form.setValue("finalizado", res?.finalizado || false);
                form.resetField("eventos");
                res?.eventos?.map((evento,index) =>{
                    insert(index,evento);
                })

                setRodadasState({ jogo: res! });

                return res;
            }
        );

    }, [form, params.jogo, params.rodada]);


    const mandante = (!!rodadasState) ? timesMap.get(rodadasState.jogo.mandante?.time) : null;
    const visitante = (!!rodadasState) ? timesMap.get(rodadasState.jogo.visitante?.time) : null;
    const ganhou = (!!rodadasState) ? (rodadasState.jogo.mandante?.gols - rodadasState.jogo.visitante?.gols) : 0;


    return (
        <div id="anajkn">

            <Layout>
                <div >
                    <DashboardHeader heading='Fatimão 2023' src='/escudo.png'  >
                        <div className="flex flex-rows">

                            <Avatar >
                                <AvatarImage src={user?.image || ""} alt={`Avatar do usuário ${user?.name}`} />
                                <AvatarFallback>{user?.name}</AvatarFallback>
                            </Avatar>

                            <Button variant={"outline"} onClick={() => { signOut() }}>Sair</Button>
                        </div>

                    </DashboardHeader>

                    <Form {...form}  >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-10">
                            <Card className="my-2">
                                <CardHeader className="flex justify-between flex-row">
                                    <div>
                                        {`${rodadasState.jogo.data} - ${rodadasState.jogo.hora}`}
                                    </div>
                                    <div>
                                        {rodadasState.jogo.local}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex">

                                    <div className="flex  flex-1 md:justify-between">
                                        <div className="flex flex-col md:flex-1">
                                            <div className="flex justify-start md:flex-1">
                                                {mandante?.escudo && <Image src={mandante?.escudo} alt={`Escudo do time ${mandante?.nome}`} width={60} height={60} className="h-10 w-10 m-auto md:h-20 md:w-20" />}
                                                <p className={`hidden md:flex text-xl ${ganhou > 0 ? "font-bold" : "font-normal"} mt-auto mx-4 whitespace-nowrap  `}>
                                                    {`${mandante?.nome}`}
                                                </p>
                                            </div>
                                            <div className="flex flex-col justify-start md:flex-1 aling-end">
                                                {
                                                    rodadasState.jogo.eventos?.filter(jogo => jogo.time == mandante?.nome && jogo.tipo == "gol").map((evento,index) => (
                                                        <span  key={evento.nome+index} className="flex justify-start ml-auto w-1/2 gap-2">
                                                            {Icons.ball({},"l")} {" - "} {evento.nome}
                                                        </span>

                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-rows text-3xl justify-between font-bold my-auto flex-1">
                                            <FormField
                                                control={form.control}
                                                name="golsMandante"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input type="number" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}

                                            />
                                            -
                                            <FormField
                                                control={form.control}
                                                name="golsVisitante"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input type="number"{...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}

                                            />
                                        </div>
                                        <div className="flex flex-col md:flex-1">
                                            <div className="flex justify-start md:flex-1">
                                                <p className={`hidden md:flex text-xl ${ganhou < 0 ? "font-bold" : "font-normal"} mt-auto mx-4 whitespace-nowrap `}>

                                                    {` ${visitante?.nome}`}

                                                </p>
                                                {visitante?.escudo && <Image src={visitante?.escudo} alt={`Escudo do time ${visitante?.nome}`} width={60} height={60} className="h-10 w-10 m-auto md:h-20 md:w-20" />}
                                            </div>
                                            <div className="flex flex-col justify-start md:flex-1 aling-end">
                                                {
                                                    rodadasState.jogo.eventos?.filter(jogo => jogo.time == visitante?.nome && jogo.tipo == "gol").map((evento,index) => (
                                                        <span key={evento.nome+index} className="flex justify-start ml-auto w-1/2 gap-2">
                                                            {Icons.ball({},"l")} {" - "} {evento.nome}
                                                        </span>

                                                    ))
                                                }
                                            </div>
                                        </div>



                                    </div>



                                </CardContent>
                                <CardFooter className="flex flex-col justify-center">
                                    <FormField
                                        control={form.control}
                                        name="finalizado"
                                        render={({ field }) => (
                                            <div className="flex items-center space-x-2">
                                                <FormItem>
                                                    <FormLabel>
                                                        <Label htmlFor="airplane-mode">Acabou?</Label>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Switch
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            </div>
                                        )}

                                    />


                                    <Button
                                        type="submit"
                                        variant={rodadasState.jogo.finalizado ? "secondary" : "default"}
                                        size={"lg"}>
                                        {rodadasState.jogo.finalizado ? "Alterar" : "Adicionar"}
                                    </Button>
                                </CardFooter>
                            </Card>
                            <div className="flex flex-col sm:flex-row jusify-between mx-2 my-10 gap-20">

                                <Card className="flex-1">
                                    <CardContent >
                                        <h2 className="text-2xl text-center">Gerenciar Gols</h2>

                                        <div className="eventos flex flex-col ">
                                            <div className="flex flex-col">
                                                {fields.map((field, index) => (
                                                    <div key={field.id}>
                                                        {
                                                            field.tipo == "gol" &&
                                                            <div className="flex flex-col sm:flex-row justify-between gap-6 my-2">
                                                                <FormField
                                                                    control={form.control}
                                                                    name={`eventos.${index}.nome`}
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <FormControl>
                                                                                <Input {...field} placeholder="Nome do Jogador" />
                                                                            </FormControl>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                                <FormFieldTimeComponent fieldArray={field} {... { form, index, mandante, visitante }} />
                                                                <Button
                                                                    type="button"
                                                                    variant={"destructive"}
                                                                    size="sm"
                                                                    className="my-auto"
                                                                    onClick={() => remove(index)}
                                                                >
                                                                    {Icons.x({})}
                                                                </Button>

                                                            </div>}
                                                    </div>


                                                ))}
                                                <Button
                                                    type="button"
                                                    size="lg"
                                                    className="mt-2"
                                                    onClick={() => append({ nome: "", tipo: "gol", time: nomeTimes.Nenhum })}
                                                >
                                                    Adicionar Evento
                                                </Button>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>


                                <Card className="flex-1">
                                    <CardContent>

                                        <div className="eventos flex flex-col ">
                                            <h2 className="text-2xl text-center">Gerenciar Cartões</h2>
                                            <div className="flex flex-col">
                                                {fields.map((field, index) => (<>
                                                    {
                                                        field.tipo != "gol" &&
                                                        <Card key={field.id} className="my-2">
                                                            <CardContent>
                                                                <div className="flex flex-col sm:flex-row my-2 justify-between gap-6">
                                                                    <FormField
                                                                        control={form.control}
                                                                        name={`eventos.${index}.nome`}
                                                                        render={({ field }) => (
                                                                            <FormItem>
                                                                                <FormControl>
                                                                                    <Input {...field} placeholder="Nome do Jogador" />
                                                                                </FormControl>
                                                                                <FormMessage />
                                                                            </FormItem>
                                                                        )}
                                                                    />

                                                                    <FormFieldTimeComponent fieldArray={field} {... { form, index, mandante, visitante }} />


                                                                    <FormField
                                                                        control={form.control}
                                                                        name={`eventos.${index}.tipo`}
                                                                        render={({ field }) => (
                                                                            <FormItem className="flex-1">
                                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                                    <FormControl>
                                                                                        <SelectTrigger >
                                                                                            <SelectValue placeholder="Gol? Cartão?" />
                                                                                        </SelectTrigger>
                                                                                    </FormControl>
                                                                                    <SelectContent >
                                                                                        <SelectItemsCatoes />
                                                                                    </SelectContent>
                                                                                </Select>

                                                                                <FormMessage />

                                                                            </FormItem>
                                                                        )}
                                                                    />
                                                                    <Button
                                                                        type="button"
                                                                        variant={"destructive"}
                                                                        size="sm"
                                                                        className="my-auto"
                                                                        onClick={() => remove(index)}
                                                                    >
                                                                        {Icons.x({})}
                                                                    </Button>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    }

                                                </>


                                                ))}
                                                <Button
                                                    type="button"
                                                    size="sm"
                                                    className="mt-2"
                                                    onClick={() => append({ nome: "", tipo: "cartao_amarelo", time: nomeTimes.Nenhum })}
                                                >
                                                    Adicionar Evento
                                                </Button>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>

                            </div>

                        </form>

                    </Form>
                </div>



            </Layout>
        </div>
    )
}


