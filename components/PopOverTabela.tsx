import { Linha} from "@/app/model/interfaces"
import { PopoverContent } from "./ui/popover";
import Image from "next/image";

export default function PopOverTabela({linha,index}:{linha:Linha, index:number}){
    const pontos: number = 3 * linha.vitorias + linha.empates;
    const jogos: number = linha.vitorias + linha.empates + linha.derrotas;

    return(
        <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Time: </h4>
                    <p className="flex flex-rows gap-4 text-sm text-muted-foreground">
                      {linha.time && <Image alt="" key={index + "-escudo-img"} src={linha.time?.escudo} width={40} height={40} />}
                      {linha.time?.nome}
                    </p>
                  </div>

                  
                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Pontos: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {pontos}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Jogos: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {jogos}
                    </span>
                    </h4>
                  </div>
                  
                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Vitórias: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.vitorias}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Empates: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.empates}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Derrotas: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.derrotas}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Gols Feitos: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.golsFeitos}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Gols Pegos: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.golsPegos}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Saldo de Gols: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.golsFeitos-linha.golsPegos}
                    </span>
                    </h4>
                  </div>

                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Cartões Amarelos: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.amarelos}
                    </span>
                    </h4>
                  </div>
                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Cartões Azuis: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.azuis}
                    </span>
                    </h4>
                  </div>
                  <div className="flex flex-rows space-y-2">
                    <h4 className="flex justify-between flex-1 font-medium leading-none">Cartões Vermelhos: 
                    <span className="flex-1 text-sm text-muted-foreground text-right">
                      {linha.vermelhos}
                    </span>
                    </h4>
                  </div>

                </div>
              </PopoverContent>
    )
}