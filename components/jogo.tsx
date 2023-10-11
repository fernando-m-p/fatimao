import { Jogo } from "@/app/model/interfaces";
interface JogoProps {
    jogo: Jogo;
};

import svg from "@/public/versus.svg"

const jogo__informacoesClass = "text-gray-500 font-sans text-xs font-bold tracking-tighter uppercase";
const jogoClass = "flex flex-col items-center text-center justify-center theme";
const jogo__informacoes__localClass = "font-normal";
const placarClass = "items-center text-[#333333] flex justify-center h-16"; 
const placar__equipesClass = "items-center text-[#333333] flex grow font-sans text-lg font-thin h-40 leading-4 align-middle w-2/5 " ;
const placar__equipes__mandanteClass = "text-right justify-end";
const placar__equipes__visitanteClass = "text-left justify-start";
const equipes__escudoClass = "h7 w-7 ";
const placar_boxClass = "items-center text-[#111111] flex grow-[2] h-10 justify-center w-1/3";
const placar_box__valorClass = "text-xl font-sans font-bold align-middle ";
const placar_box__valor_PenaltisClass = "text-xs";
const placar_box_versusClass = "flex h-2 w-2 my-0 mx-1.5 overflow-hidden align-middle"


export default function JogoComponent({ jogo }: JogoProps) {
    return (
        <div className={jogoClass}>
            <div className={jogo__informacoesClass}>
                <span className="jogo__informacoes--data"> {jogo.data} </span>
                <span className={jogo__informacoes__localClass}> {jogo.local} </span>
                <span className="jogo__informacoes--hora"> {jogo.hora} </span>
            </div>
            <div className={placarClass}>
                <div className={placar__equipesClass+placar__equipes__mandanteClass}>
                    <span className="equipes__sigla" title={jogo.mandante.time.nome}>{jogo.mandante.time.abreviado}</span>
                    <span className="hidden">{jogo.mandante.time.nome}</span>
                    <img
                        className= {equipes__escudoClass + " ml-2"}
                        src={jogo.mandante.time.escudo}
                        width="30" height="30" title={jogo.mandante.time.nome}
                        pinger-seen="true"
                    />
                </div>
                <div className={placar_boxClass}>
                    <span className={placar_box__valorClass}>{jogo.mandante.gols.length}</span>
                    <span className={placar_box__valorClass + placar_box__valor_PenaltisClass +" ml-1"}></span>
                    <span className={placar_box_versusClass}>
                        <svg viewBox="0 0 100 100" id="scoreboard-vs-icon" width="100%" height="100%">
                            <line x1="-3" x2="100" y1="1" y2="100" stroke="#555" stroke-width="5">

                            </line>
                            <line x1="-3" x2="100" y1="100" y2="1" stroke="#555" stroke-width="5">
                            </line>
                        </svg>
                    </span>
                    <span className={placar_box__valorClass + placar_box__valor_PenaltisClass +" mr-1"}></span>
                    <span className={placar_box__valorClass}>{jogo.visitante.gols.length}</span>
                </div>
                <div className={placar__equipesClass+placar__equipes__visitanteClass}>
                    <img 
                         className= {equipes__escudoClass + " mr-2"} 
                        src={jogo.visitante.time.escudo} width="30" height="30" 
                        title={jogo.visitante.time.nome} 
                        pinger-seen="true" />
                    <span className="equipes__sigla" title={jogo.visitante.time.nome} >{jogo.visitante.time.abreviado} </span>
                    <span className="hidden">{jogo.visitante.time.nome} </span>
                </div>
            </div>
        </div>
    )

}