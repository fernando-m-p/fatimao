import { Rodada } from "@/app/model/interfaces";
import JogoComp from "@/components/jogo"

interface ListaJogoProps {
    rodada: Rodada;
};


const jogo__informacoesClass = "text-gray-500 font-sans text-xs font-bold tracking-tighter uppercase";
const jogoClass = "flex flex-col items-center text-center justify-center theme";
const jogo__informacoes__localClass = "font-normal";
const placarClass = "items-center text-[#333333] flex justify-center h-16";
const placar__equipesClass = "items-center text-[#333333] flex grow font-sans text-lg font-thin h-40 leading-4 align-middle w-2/5 ";
const placar__equipes__mandanteClass = "text-right justify-end";
const placar__equipes__visitanteClass = "text-left justify-start";
const equipes__escudoClass = "h7 w-7 ";
const placar_boxClass = "items-center text-[#111111] flex grow-[2] h-10 justify-center w-1/3";
const placar_box__valorClass = "text-xl font-sans font-bold align-middle ";
const placar_box__valor_PenaltisClass = "text-xs";
const placar_box_versusClass = "flex h-2 w-2 my-0 mx-1.5 overflow-hidden align-middle"


export default function JogoComponent({ rodada }: ListaJogoProps) {
    return (
        <section id="tabela-lista-jogos">
            <header>
                <h2 className="classificacao__header--titulo">Jogos</h2>
            </header>

            <nav className="lista-jogos__navegacao">


                <span className="lista-jogos__navegacao--setas lista-jogos__navegacao--seta-esquerda  lista-jogos__navegacao--setas-ativa">
                    <svg stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                        <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z">
                        </path>
                    </svg>
                </span>
                <span className="lista-jogos__navegacao--rodada">1ª RODADA - 1º TURNO</span>
                <span className="lista-jogos__navegacao--setas lista-jogos__navegacao--seta-direita  lista-jogos__navegacao--setas-ativa">
                    <svg stroke="#06AA48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                        <path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z">
                        </path>
                    </svg>
                </span>
            </nav>
            <ul className="lista-jogos">
                {rodada.jogos.map(jogo => {
                    return (<li className="lista-jogos__jogo">
                        <JogoComp jogo={jogo} />
                    </li>)
                })}
            </ul>

        </section >
    )

}