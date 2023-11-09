"use client"
import { Pontucao, Rodada } from "@/app/model/interfaces"
import Image from "next/image";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import PopOverTabela from "./PopOverTabela";
import { Icons } from "./icons";

interface TabelaProps {
  estatisticas: Pontucao
}
export default function Tabela({ estatisticas }: TabelaProps) {
  const [show, setShow] = useState(false);
  const classificacao__header__tituloClass = "text-[#111111] text-2xl font-bold tracking-tighter leading-7 mb-2.5 uppercase";
  const cabecalhoClass = "break-all p-2 border w-16 ";

  const escodeMobile = " hidden sm:block ";
  const escodeDesktop = " hidden xl:block ";
  const escodeTablet = " hidden lg:block ";

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow  m-4 sm:m-10 flex-1" >
      <div className="px-10 pt-6 border-b-2 border-black">

        <p className={classificacao__header__tituloClass}>Tabela</p>
      </div>

      <div className={"flex " + (show ? "" : "")}>
        <div className={cabecalhoClass + " flex-1"}>Classificação</div>
        <div className={cabecalhoClass}>P</div>
        <div className={cabecalhoClass + escodeMobile} >J</div>
        <div className={cabecalhoClass + escodeMobile} >V</div>
        <div className={cabecalhoClass + escodeTablet} >E</div>
        <div className={cabecalhoClass + escodeTablet} >D</div>
        <div className={cabecalhoClass + escodeTablet} >GP</div>
        <div className={cabecalhoClass + escodeTablet} >GC</div>
        <div className={cabecalhoClass + escodeMobile} >SG</div>
        <div className={cabecalhoClass + escodeDesktop} >{Icons.card("yellow", {})}</div>
        <div className={cabecalhoClass + escodeDesktop} >{Icons.card("blue", {})}</div>
        <div className={cabecalhoClass + escodeDesktop} >{Icons.card("red", {})}</div>
        <div className={cabecalhoClass + escodeMobile} >%</div>
      </div>
      <div>
        {estatisticas.linhas.map((linha, index) => {
          const pontos: number = 3 * linha.vitorias + linha.empates;
          const jogos: number = linha.vitorias + linha.empates + linha.derrotas;

          return (
            <Popover key={index + "-elemento"}>
              <PopoverTrigger asChild>

                <div className={(show ? "flex" : " flex ")} onClick={e => { setShow(!show) }}>
                  <div key={index + "-escudo"} className={cabecalhoClass + " border-r-0"} >
                    {linha.time && <Image alt="" key={index + "-escudo-img"} src={linha.time?.escudo} width={40} height={40} />}
                  </div>
                  <div key={index + "-nome"} className={cabecalhoClass + " flex-1 border-l-0"} >{linha.time?.nome}</div>
                  <div key={index + "-pontos"} className={cabecalhoClass} >{pontos}</div>
                  <div key={index + "-jogos"} className={cabecalhoClass + escodeMobile} >{jogos}</div>
                  <div key={index + "-vitorias"} className={cabecalhoClass + escodeMobile} >{linha.vitorias}</div>
                  <div key={index + "-empates"} className={cabecalhoClass + escodeTablet} >{linha.empates}</div>
                  <div key={index + "-derrotas"} className={cabecalhoClass + escodeTablet} >{linha.derrotas}</div>
                  <div key={index + "-gf"} className={cabecalhoClass + escodeTablet} >{linha.golsFeitos}</div>
                  <div key={index + "-gp"} className={cabecalhoClass + escodeTablet} >{linha.golsPegos}</div>
                  <div key={index + "-sg"} className={cabecalhoClass + escodeMobile} >{linha.golsFeitos - linha.golsPegos}</div>
                  <div key={index + "-ca"} className={cabecalhoClass +  escodeDesktop} >{linha.amarelos}</div>
                  <div key={index + "-caz"} className={cabecalhoClass + escodeDesktop} >{linha.azuis}</div>
                  <div key={index + "-cv"} className={cabecalhoClass + escodeDesktop} >{linha.vermelhos}</div>
                  <div key={index + "-porct"} className={cabecalhoClass + escodeMobile} >{jogos > 0 ? new Number((pontos / (3 * jogos)) * 100).toFixed(2) : 0}</div>

                </div>
              </PopoverTrigger>
              <PopOverTabela linha={linha} index={index} />
            </Popover>
          )
        })}

      </div>
    </div>


  )
}