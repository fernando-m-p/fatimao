"use client"
import { DashboardHeader } from "@/components/header"
import Tabela from '@/components/tabela'
import TabelaRodada from '@/components/tabelaJogos';
import { Linha, Rodada } from './model/interfaces'
import { timesMap, pegaEstatisticas } from './jogos'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { getRodadas } from "@/lib/firabase";
import { useEffect, useState } from "react";
import ListaArtilheirosComponent from "@/components/ListaArtilheiros";
import ListaPunidosComponent from "@/components/ListaPunidos";


export default function Home() {
  const [rodadasState, setRodadasState] = useState([] as Rodada[])
  const [estatisticas, setEstatisticas] = useState({ linhas: [] } as { linhas: Linha[] })


  useEffect(() => {
    const fetchData = async () => getRodadas();

    const result = fetchData().then(
      res => {
        setRodadasState(res);
        calculaPontos(res);
        return res;
      }
    );
  }, []);


  function calculaPontos(rodadasC: Rodada[]) {
    estatisticas.linhas = [];
    timesMap.forEach((time, index) => {
      estatisticas.linhas.push(pegaEstatisticas(rodadasC, index));
    });
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

  }



  return (
    <>
      <DashboardHeader heading='Fatimão 2023' src='/escudo.png'>
        <Link href={"/admin"}>
          <Button variant={"outline"}>Admin</Button>
        </Link>
      </DashboardHeader>
      <div className='flex flex-col sm:flex-row'>
        {estatisticas.linhas.length > 0 && <Tabela estatisticas={estatisticas} />}
        {rodadasState.length > 0 &&
          <>
            <TabelaRodada rodadas={rodadasState} />

          </>
        }


      </div>
      <div className="flex flex-row justify-center">
        {rodadasState.length > 0 &&
          <>
            <ListaArtilheirosComponent rodadas={rodadasState} />
            <ListaPunidosComponent rodadas={rodadasState} />
          </>
        }
      </div>

    </>
  )
}
