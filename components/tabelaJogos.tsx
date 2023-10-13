
import { Rodada } from "@/app/model/interfaces";
import JogoComp from "@/components/jogo"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import RodadaComp from '@/components/listaJogos';

interface TabelaJogosProps {
    rodadas: Rodada[];
};




const tabelaListaJogosClass = "border-l border-[#dddddd] ml-8 pl-8 grow w-1/3";
const classificacao__header__tituloClass = "text-[#111111] text-2xl font-bold tracking-tighter leading-7 px-4 mb-2.5 uppercase ";
const lista__jogos_navegacaoClass = "border-y border-stone-100 text-[#111111] flex text-base font-bold justify-center aling-center upercase py-2.5 w-100 mx-7";
const lista__jogos_navegacao_setasClass = "text-[#cccccc] grow text-2xl h-8 fill-[#dddddd] flex items-center ";
const lista_jogoClass = "text-base p-0 h-5/6 list-none border-t-2 border-black"
const lista_jogos_jogoClass = "border-b border-[#e3e3e3] block"


export default function TabelaJogosComponent({ rodadas }: TabelaJogosProps) {

    const [index,setIndex] = useState(0);

    const proximo = ()=>{
        if(index<rodadas.length-1){

            setIndex((prev)=>prev+1);
            console.log(rodadas[index]);
        }
    }

    const anterior = ()=>{
        if(index>0){

            setIndex((prev)=>prev-1);
            console.log(rodadas[index]);
        }
    }
   
    useEffect(()=>{
        console.log(rodadas[index]);
    },[])
   
    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow  m-10" >
            <div className={"flex flex-col space-y-1.5 py-6"}>
                    <div className="border-b-2 border-black">

                    <h2 className={classificacao__header__tituloClass}>Jogos</h2>
                    </div>
                
                <div className={lista__jogos_navegacaoClass}>



                    <span className={lista__jogos_navegacao_setasClass + " lista-jogos__navegacao--seta-esquerda  lista-jogos__navegacao--setas-ativa"}
                    onClick={anterior}>
                        <svg stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" className="rotate-180 h-6 stroke-[10px]">
                            <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z">
                            </path>
                        </svg>
                    </span>
                    <span className="whitespace-nowrap mx-4 lista-jogos__navegacao--rodada">1ª RODADA - 1º TURNO</span>
                    <span className={lista__jogos_navegacao_setasClass + " lista-jogos__navegacao--seta-direita  lista-jogos__navegacao--setas-ativa justify-end"} 
                            onClick={proximo}>
                        <svg stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" className="h-6 stroke-[10px]" >
                            <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z">
                            </path>
                        </svg>
                    </span>

                </div>
            </div>

           <RodadaComp rodada={rodadas[index]}/>
        </div>
    )



}