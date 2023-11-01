import Image from "next/image";
import { nomeTimes } from "@/app/jogos";
import { ControllerRenderProps, FieldArrayWithId, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Time } from "@/app/model/interfaces";

export default function FormFieldTimeComponent({ fieldArray, form, visitante, mandante, index }: {
    fieldArray: FieldArrayWithId<{
        golsMandante: string;
        golsVisitante: string;
        finalizado: boolean;
        eventos?: {
            nome: string;
            time: nomeTimes;
            tipo: "gol" | "cartao_amarelo" | "cartao_azul" | "cartao_vermelho";
        }[] | undefined;
    }, "eventos", "id">,
    form: UseFormReturn<{
        golsMandante: string;
        golsVisitante: string;
        finalizado: boolean;
        eventos?: {
            nome: string;
            time: nomeTimes;
            tipo: "gol" | "cartao_amarelo" | "cartao_azul" | "cartao_vermelho";
        }[] | undefined;
    }, any, undefined>,
    visitante: Time | null | undefined,
    mandante: Time | null | undefined,
    index: number
}) {
    return (
        <FormField
            control={form.control}
            name={`eventos.${index}.time`}
            render={
                ({ field }) =>
                (
                    <FormItem className="flex-1">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Time" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>

                                {mandante &&
                                    <SelectItem value={mandante?.nome}>
                                        <span className="flex flex-row gap-6">

                                            <Image src={visitante!.escudo} alt="" width={20} height={20} className="hidden md:block"/>
                                            {visitante?.nome}
                                        </span>
                                    </SelectItem>}
                                {visitante &&
                                    <SelectItem value={visitante?.nome} >
                                        <span className="flex  flex-row gap-6">

                                            <Image src={mandante!.escudo} alt="" width={20} height={20} className="hidden md:block"/>
                                            {mandante?.nome}
                                        </span>
                                    </SelectItem>}

                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )
            }
        />)}
 
