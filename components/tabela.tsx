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
  const escodeMobile=" hidden sm:block";



  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow  m-4 sm:m-10 flex-1" >
      <div className="px-10 pt-6 border-b-2 border-black">

      <p className={classificacao__header__tituloClass}>Tabela</p>
      </div>

      <div  className="flex ">
          <div className={cabecalhoClass + " border-r-0"}>Classificacao</div>
          <div className={cabecalhoClass+" flex-1 border-l-0"}></div>
          <div className={cabecalhoClass}>P</div>
          <div className={cabecalhoClass+escodeMobile} >J</div>
          <div className={cabecalhoClass+escodeMobile} >V</div>
          <div className={cabecalhoClass+escodeMobile} >E</div>
          <div className={cabecalhoClass+escodeMobile} >D</div>
          <div className={cabecalhoClass+escodeMobile} >GP</div>
          <div className={cabecalhoClass+escodeMobile} >GC</div>
          <div className={cabecalhoClass+escodeMobile} >SG</div>
          <div className={cabecalhoClass+escodeMobile} >AMA</div>
          <div className={cabecalhoClass+escodeMobile} >AZU</div>
          <div className={cabecalhoClass+escodeMobile} >VER</div>
          <div className={cabecalhoClass+escodeMobile} >%</div>
      </div>
      <div>
        {estatisticas.linhas.map((linha,index) => {
          const pontos:number = 3*linha.vitorias+linha.empates;
          const jogos:number = linha.vitorias+linha.empates+linha.derrotas;
          
          return (
            <div key={index +"-elemento"} className="flex ">
              <div key={index + "-escudo"}className={cabecalhoClass+ " border-r-0"} >
                  <img key={index+"-escudo-img"}src={linha.time?.escudo}/>
              </div>
              <div key={index + "-nome"}className={cabecalhoClass+" flex-1 border-l-0"} >{linha.time?.nome}</div>
              <div key={index + "-pontos"} className={cabecalhoClass} >{pontos}</div>
              <div key={index + "-jogos"} className={cabecalhoClass+escodeMobile} >{jogos}</div>
              <div key={index + "-vitorias"} className={cabecalhoClass+escodeMobile} >{linha.vitorias}</div>
              <div key={index + "-empates"} className={cabecalhoClass+escodeMobile} >{linha.empates}</div>
              <div key={index + "-derrotas"} className={cabecalhoClass+escodeMobile} >{linha.derrotas}</div>
              <div key={index + "-gf"} className={cabecalhoClass+escodeMobile} >{linha.golsFeitos}</div>
              <div key={index + "-gp"} className={cabecalhoClass+escodeMobile} >{linha.golsPegos}</div>
              <div key={index + "-sg"} className={cabecalhoClass+escodeMobile} >{linha.golsFeitos- linha.golsPegos}</div>
              <div key={index + "-ca"} className={cabecalhoClass+escodeMobile} >{linha.amarelos}</div>
              <div key={index + "-caz"} className={cabecalhoClass+escodeMobile} >{linha.azuis}</div>
              <div key={index + "-cv"} className={cabecalhoClass+escodeMobile} >{linha.vermelhos}</div>
              <div key={index + "-porct"} className={cabecalhoClass+escodeMobile} >{jogos>0 ? new Number((pontos / (3*jogos))*100).toFixed(2):0}</div>

            </div>
          )
        })}

      </div>
    </div>


  )
}