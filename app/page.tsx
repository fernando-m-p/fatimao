"use client"
import Image from 'next/image'
import {DashboardHeader} from "@/components/header"
import Tabela from '@/components/tabela'
import RodadaComp from '@/components/listaJogos'
import TabelaRodada from '@/components/tabelaJogos';
import { Jogo, Pontucao, Rodada, Time } from './model/interfaces'
import { campeonato , nomeTimes, timesMap, pegaEstatisticas} from './jogos'


export default function Home() {
  const estatisticas:Pontucao = {
    linhas: []
  }
  const rodadas = campeonato.rodadas;
  


  timesMap.forEach(time => estatisticas.linhas.push(
    pegaEstatisticas(rodadas,time)
  ))

 


  return (
    <>
    <DashboardHeader  heading='Fatimão 2023' src='/escudo.png'></DashboardHeader>
    <div className='flex flex-col sm:flex-row'>
    <Tabela estatisticas={estatisticas}/>
    <TabelaRodada rodadas={rodadas}/>
    </div>
    </>
  )
}
