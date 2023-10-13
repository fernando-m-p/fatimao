"use client"
import Image from 'next/image'
import {DashboardHeader} from "@/components/header"
import Tabela from '@/components/tabela'
import RodadaComp from '@/components/listaJogos'
import TabelaRodada from '@/components/tabelaJogos';
import { Jogo, Pontucao, Rodada, Time } from './model/interfaces'


export default function Home() {
  const jogo:Jogo = {
    mandante:{
      time:{
        nome:"Roma",
        abreviado:"ROM",
        escudo:"https://s.sde.globo.com/media/teams/2018/03/12/roma.svg"
      },
      amarelos:[],
      azuis:[],
      gols:[],
      vermelhos:[]
    },
    visitante:{
      time:{
        nome:"Bayern de Munique",
        abreviado:"BAY",
        escudo:"https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg"
      },
      amarelos:[],
      azuis:[],
      gols:[],
      vermelhos:[]
    },
    data:"20/09/2023",
    finalizado:false,
    hora:"19:30",
    local:"ADUFPI"
  }
const inter:Time = {
  nome:"Inter",
  abreviado:"INT",
  escudo:"https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg"
}
  const jogo2:Jogo = {
    mandante:{
      time:{
        nome:"Inter",
        abreviado:"INT",
        escudo:"https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg"
      },
      amarelos:[],
      azuis:[],
      gols:[],
      vermelhos:[]
    },
    visitante:{
      time:{
        nome:"Bayern de Munique",
        abreviado:"BAY",
        escudo:"https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg"
      },
      amarelos:[],
      azuis:[],
      gols:[],
      vermelhos:[]
    },
    data:"20/09/2023",
    finalizado:false,
    hora:"19:30",
    local:"ADUFPI"
  }
  const rodada:Rodada = {
    descricao:"ksanflkasn",
    jogos:[
      jogo,jogo
    ]
  }
  const rodada2:Rodada = {
    descricao:"ksanflkasn",
    jogos:[
      jogo2,jogo2
    ]
  }


  const estatisticas:Pontucao = {
    linhas: [
      {
        time:inter,
        vitorias:0,
        empates:0,
        derrotas:0,
        golsFeitos:0,
        golsPegos:0,
        amarelos:0,
        azuis:0,
        vermelhos:0
      }
    ]
  }
  const rodadas = [rodada, rodada2]

  return (
    <>
    <DashboardHeader  heading='Fatimão 2023' src='/escudo.png'></DashboardHeader>
    <div className='flex'>
    <Tabela estatisticas={estatisticas}/>
    <TabelaRodada rodadas={rodadas}/>
    </div>
    </>
  )
}
