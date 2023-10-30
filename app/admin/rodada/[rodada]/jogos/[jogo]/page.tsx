"use client"
import { DashboardHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getJogo, gravarJogo } from "@/lib/firabase";
import { useEffect, useState } from "react";
import { Jogo, Rodada } from "../../../../../model/interfaces";
import Image from "next/image"
import { timesMap } from "@/app/jogos";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Layout from "@/app/admin/rodada/[rodada]/jogos/[jogo]/Layout"
import Link from "next/link";



export default function RodadaPage({ params }: { params: { rodada: string, jogo: string } }) {
    const session = useSession();

    
    const user = session.data?.user;
    const [rodadasState, setRodadasState] = useState({ jogo: {} } as { jogo: Jogo })



    useEffect(() => {

        const id = params.rodada;
        const fetchData = async () => getJogo({ rodada: params.rodada, idJogo: params.jogo });

        const result = fetchData().then(
            res => {
                console.log(res);
                setRodadasState({ jogo: res! });
                return res;
            }
        );

    }, []);


    const mandante = (!!rodadasState) ? timesMap.get(rodadasState.jogo.mandante?.time) : null;
    const visitante = (!!rodadasState) ? timesMap.get(rodadasState.jogo.visitante?.time) : null;
    const ganhou = (!!rodadasState) ? (rodadasState.jogo.mandante?.gols - rodadasState.jogo.visitante?.gols) : 0;
    return (
        <Layout>
            <DashboardHeader heading='Fatimão 2023' src='/escudo.png'  >
                <div className="flex flex-rows">

                <Avatar >
                    <AvatarImage src={user?.image || ""} alt={`Avatar do usuário ${user?.name}`} />
                    <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>

                <Button variant={"outline"} onClick={() => { signOut() }}>Sair</Button>
                </div>

            </DashboardHeader>


            <Card key={JSON.stringify(rodadasState.jogo)} className="my-2">
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
                        <div className="flex justify-start flex-1">
                            <Image src={mandante?.escudo || ""} alt={`Escudo do time ${mandante?.nome}`} width={60} height={60} className="h-20 w-20" />
                            <p className={`hidden md:flex text-xl ${ganhou > 0 ? "font-bold" : "font-normal"} my-auto mx-4 whitespace-nowrap `}>
                                {`${mandante?.nome}`}
                            </p>
                        </div>
                        <div className="flex flex-rows text-3xl justify-between font-bold my-auto">
                            <Input type="number" className="w-20"
                                defaultValue={`${rodadasState.jogo.finalizado ? rodadasState.jogo.mandante.gols : 0}`}
                                onChange={e => { rodadasState.jogo.mandante.gols = Number(e.target.value) }}
                            >
                            </Input>


                            -
                            <Input type="number" className="w-20"
                                defaultValue={`${rodadasState.jogo.finalizado ? rodadasState.jogo.visitante.gols : 0}`}
                                onChange={e => {
                                    rodadasState.jogo.visitante.gols = Number(e.target.value)
                                    console.log(rodadasState.jogo.mandante.gols, "X", rodadasState.jogo.visitante.gols)
                                }}
                            >
                            </Input>
                        </div>
                        <div className="flex justify-end flex-1">
                            <p className={`hidden md:flex text-xl ${ganhou < 0 ? "font-bold" : "font-normal"} my-auto mx-4 whitespace-nowrap `}>

                                {` ${visitante?.nome}`}

                            </p>
                            <Image src={visitante?.escudo || ""} alt={`Escudo do time ${visitante?.nome}`} width={60} height={60} className="h-20 w-20" />

                        </div>



                    </div>


                </CardContent>
                <CardFooter className="justify-center">
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode"  defaultChecked={!!rodadasState.jogo.finalizado} onCheckedChange={(checked)=>{
                            rodadasState.jogo.finalizado = checked;
                        }}/>
                        <Label htmlFor="airplane-mode">Acabou?</Label>
                    </div>
                    <Link href={"/admin"}>
                    <Button onClick={()=>{gravarJogo({
                        rodada:params.rodada,
                        idJogo:params.jogo,
                        jogo:rodadasState.jogo,
                        token:session.data?.user.id_token,
                        acess_token: session.data?.user.acess_token
                    })}} variant={rodadasState.jogo.finalizado ? "secondary" : "default"} size={"lg"}>{rodadasState.jogo.finalizado ? "Alterar" : "Adicionar"}</Button>
                    </Link>
                </CardFooter>
            </Card>




        </Layout>

    )
}


