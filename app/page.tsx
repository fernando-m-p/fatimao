"use client"
import Image from 'next/image'
import { DashboardHeader } from "@/components/header"
import Tabela from '@/components/tabela'
import RodadaComp from '@/components/listaJogos'
import TabelaRodada from '@/components/tabelaJogos';
import { Jogo, Pontucao, Rodada, Time } from './model/interfaces'
import { campeonato, nomeTimes, timesMap, pegaEstatisticas } from './jogos'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Home() {
  const estatisticas: Pontucao = {
    linhas: []
  }
  const rodadas = campeonato.rodadas;



  timesMap.forEach(time => estatisticas.linhas.push(
    pegaEstatisticas(rodadas, time)
  ));
  estatisticas.linhas.sort((a, b) => {
    const pontosA = 3 * a.vitorias + a.empates;
    const pontosB = 3 * b.vitorias + b.empates;
    const saldoA = a.golsFeitos - a.golsPegos;
    const saldoB = b.golsFeitos - b.golsPegos;
    if (pontosA != pontosB) {
      return pontosB - pontosA
    }
    if (a.vitorias != b.vitorias) {
      return b.vitorias - a.vitorias
    }
    if (saldoA != saldoB) {
      return saldoB - saldoA;
    }
    if (a.golsFeitos != b.golsFeitos) {
      return b.golsFeitos - a.golsFeitos;
    }


    return -1;
  })




  return (
    <>
      <DashboardHeader heading='Fatimão 2023' src='/escudo.png'>
        <Link href={"/admin"}>
          <Button variant={"outline"}>Admin</Button>
        </Link>
      </DashboardHeader>
      <div className='flex flex-col sm:flex-row'>
        <Tabela estatisticas={estatisticas} />
        <TabelaRodada rodadas={rodadas} />
      </div>
    </>
  )
}
