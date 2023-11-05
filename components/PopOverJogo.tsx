import { Jogo, Linha } from "@/app/model/interfaces"
import { PopoverContent } from "./ui/popover";
import Image from "next/image";
import { timesMap } from "@/app/jogos";
import { Icons } from "./icons";

export default function PopOverJogo({ jogo }: { jogo: Jogo }) {
  const mandante = timesMap.get(jogo.mandante.time);
  const visitante = timesMap.get(jogo.visitante.time);
  const ganhou = (!!jogo) ? (jogo.mandante?.gols - jogo.visitante?.gols) : 0;

  return (
    <PopoverContent>
      <div className="flex flex-col flex-1 md:justify-between">

        <div className="flex flex-row md:flex-1">
          <div className="flex justify-start md:flex-1">
            {mandante?.escudo && <Image src={mandante?.escudo} alt={`Escudo do time ${mandante?.nome}`} width={60} height={60} className="h-10 w-10 m-auto md:h-8 md:w-8" />}
            <p className={`hidden md:flex text-xl ${ganhou > 0 ? "font-bold" : "font-normal"} mt-auto mx-4 whitespace-nowrap  `}>
              {`${mandante?.abreviado}`}
            </p>
          </div>
          <div className="flex flex-rows text-xl justify-between font-bold mt-auto flex-0 align-bottom gap-2">
            <span>{jogo.mandante.gols}</span>
            <span> X </span>
            <span>{jogo.visitante.gols}</span>
          </div>
          <div className="flex justify-end md:flex-1">
            <p className={`hidden md:flex text-xl ${ganhou > 0 ? "font-bold" : "font-normal"} mt-auto mx-4 whitespace-nowrap  `}>
              {`${visitante?.abreviado}`}
            </p>
            {visitante?.escudo && <Image src={visitante?.escudo} alt={`Escudo do time ${visitante?.nome}`} width={60} height={60} className="h-10 w-10 m-auto md:h-8 md:w-8" />}
          </div>


        </div>



        <div className="flex flex-row md:flex-1">
          <div className="flex flex-col justify-between md:flex-1 aling-end">
            {
              jogo.eventos?.filter(jogo => jogo.time == mandante?.nome && jogo.tipo == "gol").map(evento => (
                <span className="flex justify-start text-xs gap-2">
                  {Icons.ball({}, "xs")}
                  <span>
                    {" - "}
                  </span>
                  <span>
                    {evento.nome}
                  </span>
                </span>

              ))
            }
          </div>
          <div className="flex flex-col justify-start md:flex-1 aling-end">
            {
              jogo.eventos?.filter(jogo => jogo.time == visitante?.nome && jogo.tipo == "gol").map(evento => (
                <span className="flex justify-end text-xs gap-2">
                  <span>
                    {evento.nome}
                  </span>
                  <span>
                    {" - "}
                  </span>
                  {Icons.ball({}, "xs")}
                </span>

              ))
            }
          </div>






        </div>
      </div>
    </PopoverContent >
  )
}