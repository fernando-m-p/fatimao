"use client"
import { Rodada, Time } from "@/app/model/interfaces";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { timesMapNome } from "@/app/jogos";
import Image from "next/image";
import { Icons } from "./icons";

export default function ListaPunidosComponent({ punidos, nomes }: { punidos: Map<string,{amarelo:number, azul:number, vermelho:number, time:Time}>, nomes: string[] }) {
    
  
    const classificacao__header__tituloClass = "text-[#111111] text-xl md:text-2xl font-bold tracking-tighter leading-7 px-4 mb-2.5 uppercase ";
    const lista__jogos_navegacaoClass = "border-y border-stone-100 text-[#111111] flex text-base font-bold justify-center aling-center upercase py-2.5 w-100 mx-7";
    const lista__jogos_navegacao_setasClass = "text-[#cccccc] grow text-2xl h-8 fill-[#dddddd] flex items-center ";
    const lista_jogoClass = "text-base p-0 h-5/6 list-none"
    const lista_jogos_jogoClass = "flex flex-row gap-1 md:gap-4 text-base md:text-2xl m-4 p-4 border-b border-[#e3e3e3] justify-between"


    return (

        <div className="rounded-xl border bg-card text-card-foreground shadow  m-4 sm:m-10" >
            <div className={"flex flex-col space-y-1.5 py-6"}>
                <div className="border-b-2 border-black">

                    <h2 className={classificacao__header__tituloClass}>Principais Punidos</h2>
                </div>

                <ul className={lista_jogoClass}>


                    {
                        nomes.sort(
                            (a, b) => {
                                return (punidos.get(b)?.amarelo! + 2 * punidos.get(b)?.azul! + 5 * punidos.get(b)?.vermelho!) - (punidos.get(a)?.amarelo! + 2 * punidos.get(a)?.azul! + 5 * punidos.get(a)?.vermelho!)
                            }).map(nome => {
                                return <li key={nome + "__artilheiro"} className={lista_jogos_jogoClass}>
                                    {punidos.get(nome)!.time && <Image
                                        src={punidos.get(nome)!.time.escudo}
                                        alt={`Escudo do Time ${punidos.get(nome)!.time.nome}`}
                                        width={20}
                                        height={20}
                                    />}
                                    <span>
                                        {nome}
                                    </span>
                                    -
                                    <div className="flex flex-row gap-2">

                                    <span className="flex flex-row flex-1 justify-end">
                                        {punidos.get(nome)?.amarelo}
                                        <div className="block w-6 h-10">
                                            {Icons.card2("yellow", {})}
                                        </div>
                                    </span>
                                    <span className="flex flex-row flex-1 justify-end">
                                        {punidos.get(nome)?.azul}
                                        <div className="block w-6 h-10">
                                            {Icons.card2("blue", {})}
                                        </div>
                                    </span>
                                    <span className="flex flex-row flex-1 justify-end">
                                        {punidos.get(nome)?.vermelho}
                                        <div className="block w-6 h-10">
                                            {Icons.card2("red", {})}
                                        </div>
                                    </span>
                                    </div>
                                </li>
                            })

                    }
                </ul>
            </div>
        </div>
    )
}