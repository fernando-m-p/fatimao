import { Rodada } from "@/app/model/interfaces";
import JogoComp from "@/components/jogo"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import { timesMap } from "@/app/jogos";

interface ListaJogoProps {
    rodada: Rodada;
};




const tabelaListaJogosClass = "border-l border-[#dddddd] ml-8 pl-8 grow w-1/3";
const classificacao__header__tituloClass = "text-[#111111] text-2xl font-bold tracking-tighter leading-7 mb-2.5 uppercase";
const lista__jogos_navegacaoClass = "border-y border-stone-100 text-[#111111] flex text-base font-bold justify-center aling-center upercase py-2.5 w-100 mx-7";
const lista__jogos_navegacao_setasClass = "text-[#cccccc] grow text-2xl h-8 fill-[#dddddd] flex items-center ";
const lista_jogoClass = "text-base p-0 h-5/6 list-none border-t-2 border-black"
const lista_jogos_jogoClass = "border-b border-[#e3e3e3] block"


export default function JogoComponent({ rodada }: ListaJogoProps) {
    
    return (
        
            <ul className={lista_jogoClass}>

            {rodada.jogos.map((jogo,index) => {
                  const mandante = timesMap.get(jogo.mandante.time);
                  const visitante = timesMap.get(jogo.visitante.time);
   
        return (<li key={mandante?.nome+"_"+visitante?.nome+"_"+index} className={lista_jogos_jogoClass}>
                        <JogoComp jogo={jogo} />
                            </li>)
                })
            
            }
            </ul>
    )



}