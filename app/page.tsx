"use client"
import { DashboardHeader } from "@/components/header"
import Tabela from '@/components/tabela'
import TabelaRodada from '@/components/tabelaJogos';
import { Linha, Rodada, Time } from './model/interfaces'
import { timesMap, pegaEstatisticas, timesMapNome } from './jogos'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { getRodadas } from "@/lib/firabase";
import { useEffect, useState } from "react";
import ListaArtilheirosComponent from "@/components/ListaArtilheiros";
import ListaPunidosComponent from "@/components/ListaPunidos";


export default function Home() {
  const [rodadasState, setRodadasState] = useState([] as Rodada[])
  const [estatisticas, setEstatisticas] = useState({ linhas: [] } as { linhas: Linha[] })
  const artilheiros = new Map<string, { gols: number, time: Time }>();
  const punidos = new Map<string, { amarelo: number, azul: number, vermelho: number, time: Time }>();
  const nomesArtilheiros = [] as string[];
  const nomesPunidos = [] as string[];



  useEffect(() => {
    if (rodadasState.length == 0) {
      const fetchData = async () => getRodadas();
      const result = fetchData().then(
        res => {
          setRodadasState(res);
          return res;
        }

      );
    }


  }, [rodadasState]);

  artilheiros.clear();
  calculaPontos(rodadasState);
  calculaArtilheiros(rodadasState);
  calculaPunidos(rodadasState);

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

  function calculaArtilheiros(rodadas: Rodada[]) {
    rodadas.map(rodada => {
      rodada.jogos.map(
        (jogo) => {
          jogo.eventos?.filter(e => e.tipo == "gol").map(
            evento => {
              const nome_evento = evento.nome.trim();
              if (artilheiros.has(nome_evento)) {
                artilheiros.get(nome_evento)!.gols++;
              } else {
                nomesArtilheiros.push(nome_evento);
                artilheiros.set(nome_evento, { gols: 1, time: timesMapNome.get(evento.time)! })


              }
            }
          )
        }
      )

    })
  }

  function calculaPunidos(rodadas: Rodada[]) {
    rodadas.map(rodada => {
      rodada.jogos.map(
        (jogo) => {
          jogo.eventos?.filter(e => e.tipo != "gol").map(
            evento => {
              if (evento.nome != "?") {
                const nome_evento = evento.nome.trim();

                if (punidos.has(nome_evento)) {
                  if (evento.tipo == "cartao_amarelo")
                    punidos.get(nome_evento)!.amarelo++;
                  if (evento.tipo == "cartao_azul")
                    punidos.get(nome_evento)!.azul++;
                  if (evento.tipo == "cartao_vermelho")
                    punidos.get(nome_evento)!.vermelho++;
                } else {
                  nomesPunidos.push(nome_evento);

                  punidos.set(nome_evento, {
                    amarelo: evento.tipo == "cartao_amarelo" ? 1 : 0,
                    azul: evento.tipo == "cartao_azul" ? 1 : 0,
                    vermelho: evento.tipo == "cartao_vermelho" ? 1 : 0,
                    time: timesMapNome.get(evento.time)!
                  })


                }
              }
            }
          )
        }
      )

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
      <div className="flex flex-col sm:flex-row justify-center">
        <>
          {artilheiros.size > 0 && <ListaArtilheirosComponent {... { artilheiros, nomes: nomesArtilheiros }} />}
          {punidos.size > 0 && <ListaPunidosComponent  {... { punidos, nomes: nomesPunidos }}/>}
        </>

      </div>

    </>
  )
}
