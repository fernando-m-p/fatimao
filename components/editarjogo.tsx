import { Jogo } from "@/app/model/interfaces";
import { Button } from "./ui/button";

interface EditarJogoProps  {
    jogo:Jogo
}

export default function EditarJogo({jogo}:EditarJogoProps) {
    return (
        <div id="jogo" className="flex">
            <div id="cabecalho">
                <div id="mandante">
                    <img src={jogo.mandante.time?.escudo} alt={"Escudo do time "+jogo.mandante.time?.nome} />
                    {jogo.mandante.time?.abreviado}
                </div>
                <div id="visitante">
                    <img src={jogo.visitante.time?.escudo} alt={"Escudo do time "+jogo.visitante.time?.nome} />
                    {jogo.visitante.time?.abreviado}
                </div>
            </div>
            <div>
                <div className="cabecalho">
                    Estatisticas
                </div>
                <div className="mandante">
                    <div className="gols">
                        <input type="number" name="gols_mandante" id="gols_mandante" />
                    </div>
                    <div className="cartoes">
                        <div className="amarelo">
                            <input type="number" name="amarelo_mandante" id="amarelo_mandante" />
                        </div>
                        <div className="azuis">
                            <input type="number" name="azul_mandante" id="azul_mandante" />
                        </div>
                        <div className="vermelho">
                            <input type="number" name="vermelho_mandante" id="vermelho_mandante" />
                        </div>
                    </div>
                </div>

                <div className="visitante">
                    <div className="gols">
                        <input type="number" name="gols_visitante" id="gols_visitante" />
                    </div>
                    <div className="cartoes">
                        <div className="amarelo">
                            <input type="number" name="amarelo_visitante" id="amarelo_visitante" />
                        </div>
                        <div className="azuis">
                            <input type="number" name="azul_visitante" id="azul_visitante" />
                        </div>
                        <div className="vermelho">
                            <input type="number" name="vermelho_visitante" id="vermelho_visitante" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="cadastrar-gols">
                <div className="tabela_artilheiros">

                </div>
                <select name="jogador" id="selecione_jogador">
                </select>
                <Button>Adicionar Jogador</Button>
                <Button>Remover Jogador</Button>
                <input type="number" name="gols" id="gols_jogador" />
            </div>

            <div className="cadastrar-cartoes">
                <div className="tabela_cartoes">

                </div>
                <select name="jogador" id="selecione_jogador">
                </select>
                <Button>Adicionar Jogador</Button>
                <Button>Remover Jogador</Button>
                <input type="number" name="cartoes" id="gols_jogador" />
            </div>

        </div>
    )
}