import { nomeTimes } from "../jogos";

export type Time = {
    nome:string;
    escudo: string;
    abreviado:string;
}

export type Jogador = {
    nome:string;
    time:Time;
}

export type JogoTime2 = {
    time:Time;
    gols:Jogador[];
    amarelos:Jogador[];
    azuis:Jogador[];
    vermelhos:Jogador[];
}


export type JogoTime = {
    time:number;
    gols:number;
    amarelos:number;
    azuis:number;
    vermelhos:number;
}

export type Jogo = {
    mandante:JogoTime;
    visitante:JogoTime;
    finalizado:boolean;
    aoVivo:boolean;
    local:string;
    data:string;
    hora:string;
    eventos:{ nome: string; tipo: "gol" | "cartao_amarelo" | "cartao_azul" | "cartao_vermelho"; time: nomeTimes; }[] | undefined
}

export type Rodada = {
    index?:string;
    jogos: Jogo[];
    descricao:string;
}

export type Turno = {
    rodadas: Rodada[]
}

export type Pontucao = {
    linhas: Linha[]
}

export type Linha = {
    time?:Time,
    vitorias:number,
    empates:number,
    derrotas:number,
    golsFeitos:number,
    golsPegos:number,
    amarelos:number;
    azuis:number;
    vermelhos:number
}

