import Image from 'next/image'
import {DashboardHeader} from "@/components/header"
import Tabela from '@/components/tabela'
import RodadaComp from '@/components/listaJogos'
import { Jogo, Rodada } from './model/interfaces'


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
  const rodada:Rodada = {
    descricao:"ksanflkasn",
    jogos:[
      jogo,jogo
    ]
  }

  return (
    <>
    <DashboardHeader  heading='Fatimão 2023' src='/escudo.png'></DashboardHeader>
    <div className='flex'>
    <Tabela/>
    <RodadaComp rodada={rodada}/>
    </div>
    </>
  )
}
