export type Time = {
    nome:string;
    escudo: string;
    abreviado:string;
}

export type Jogador = {
    nome:string;
    time:Time;
}

export type JogoTime = {
    time:Time;
    gols:Jogador[];
    amarelos:Jogador[];
    azuis:Jogador[];
    vermelhos:Jogador[];
}

export type Jogo = {
    mandante:JogoTime;
    visitante:JogoTime;
    finalizado:boolean;
    local:string;
    data:string;
    hora:string;
}

export type Rodada = {
    jogos: Jogo[];
    descricao:string;
}

export type Turno = {
    rodadas: Rodada[]
}

export type Pontucao = {
    linhas: {
        time:Time,
        vitorias:number,
        empates:number,
        derrotas:number,
        golsFeitos:number,
        golsPegos:number,
        amarelos:number;
        azuis:number;
        vermelhos:number
    }[]
}


