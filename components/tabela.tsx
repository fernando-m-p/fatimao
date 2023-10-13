import { Pontucao, Rodada } from "@/app/model/interfaces"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "./ui/card"

interface TabelaProps {
  estatisticas: Pontucao
}
export default function Tabela({ estatisticas }: TabelaProps) {
  const classificacao__header__tituloClass = "text-[#111111] text-2xl font-bold tracking-tighter leading-7 mb-2.5 uppercase";
  const cabecalhoClass="p-2 border w-16 ";



  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow  m-10 flex-1" >
      <div className="px-10 pt-6 border-b-2 border-black">

      <p className={classificacao__header__tituloClass}>Tabela</p>
      </div>

      <div id="header" className="flex mx-10 mt-10">
          <div className={cabecalhoClass + " border-r-0"}>Classificacao</div>
          <div className={cabecalhoClass+" flex-1 border-l-0"}></div>
          <div className={cabecalhoClass}>P</div>
          <div className={cabecalhoClass} >J</div>
          <div className={cabecalhoClass} >V</div>
          <div className={cabecalhoClass} >E</div>
          <div className={cabecalhoClass} >D</div>
          <div className={cabecalhoClass} >GP</div>
          <div className={cabecalhoClass} >GC</div>
          <div className={cabecalhoClass} >SG</div>
          <div className={cabecalhoClass} >AMA</div>
          <div className={cabecalhoClass} >AZU</div>
          <div className={cabecalhoClass} >VER</div>
          <div className={cabecalhoClass} >%</div>
      </div>
      <div>
        {estatisticas.linhas.map((linha,index) => {
          return (
            <div id={linha.time.nome+index} className="flex mx-10">
              <div className={cabecalhoClass+ " border-r-0"} >
                  <img src={linha.time.escudo}/>
              </div>
              <div className={cabecalhoClass+" flex-1 border-l-0"} >{linha.time.nome}</div>
              <div className={cabecalhoClass} >{3*linha.vitorias+linha.empates}</div>
              <div className={cabecalhoClass} >{linha.vitorias+linha.empates+linha.derrotas}</div>
              <div className={cabecalhoClass} >{linha.vitorias}</div>
              <div className={cabecalhoClass} >{linha.empates}</div>
              <div className={cabecalhoClass} >{linha.derrotas}</div>
              <div className={cabecalhoClass} >{linha.golsFeitos}</div>
              <div className={cabecalhoClass} >{linha.golsPegos}</div>
              <div className={cabecalhoClass} >{linha.golsFeitos- linha.golsPegos}</div>
              <div className={cabecalhoClass} >{linha.amarelos}</div>
              <div className={cabecalhoClass} >{linha.azuis}</div>
              <div className={cabecalhoClass} >{linha.vermelhos}</div>
              <div className={cabecalhoClass} >{(linha.vitorias+linha.empates+linha.derrotas)/(3* linha.vitorias)}</div>

            </div>
          )
        })}

      </div>
    </div>


  )
}