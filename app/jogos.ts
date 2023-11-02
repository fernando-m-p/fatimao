import { Pontucao, Rodada, Time, Linha, Jogo } from "@/app/model/interfaces"

export const enum nomeTimes {
    Nenhum = "",
    Bayern = "Bayern de Munique",
    Roma = "Roma",
    Real = "Real Madrid",
    Barcelona = "Barcelona",
    Internazionale = "Internazionale"

}


export enum nomesTimes {
    Nenhum = "",
    Bayern = "Bayern de Munique",
    Roma = "Roma",
    Real = "Real Madrid",
    Barcelona = "Barcelona",
    Internazionale = "Internazionale"

}





const enum horarios {
    primeiro = "19:30",
    segundo = "20:40"
}
const local = "ADUFPI"

export const timesMap: Map<number, Time> = new Map<number, Time>();
timesMap.set(2, { nome: nomeTimes.Bayern, abreviado: "BAY", escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg" });
timesMap.set(5, { nome: nomeTimes.Roma, abreviado: "ROM", escudo: "https://s.sde.globo.com/media/teams/2018/03/12/roma.svg" });
timesMap.set(4, { nome: nomeTimes.Real, abreviado: "REL", escudo: "https://s.sde.globo.com/media/teams/2018/03/12/real-madrid.svg" });
timesMap.set(1, { nome: nomeTimes.Barcelona, abreviado: "BAY", escudo: "https://s.sde.globo.com/media/teams/2018/03/11/barcelona.svg" });
timesMap.set(3, { nome: nomeTimes.Internazionale, abreviado: "BAY", escudo: "https://s.sde.globo.com/media/organizations/2021/03/31/Inter_de_Mil%C3%A3o_2021.svg" });


export const timesMapNome: Map<string, Time> = new Map<string, Time>();
timesMapNome.set(nomeTimes.Bayern, { nome: nomeTimes.Bayern, abreviado: "BAY", escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg" });
timesMapNome.set(nomeTimes.Roma, { nome: nomeTimes.Roma, abreviado: "ROM", escudo: "https://s.sde.globo.com/media/teams/2018/03/12/roma.svg" });
timesMapNome.set(nomeTimes.Real, { nome: nomeTimes.Real, abreviado: "REL", escudo: "https://s.sde.globo.com/media/teams/2018/03/12/real-madrid.svg" });
timesMapNome.set(nomeTimes.Barcelona, { nome: nomeTimes.Barcelona, abreviado: "BAY", escudo: "https://s.sde.globo.com/media/teams/2018/03/11/barcelona.svg" });
timesMapNome.set(nomeTimes.Internazionale, { nome: nomeTimes.Internazionale, abreviado: "BAY", escudo: "https://s.sde.globo.com/media/organizations/2021/03/31/Inter_de_Mil%C3%A3o_2021.svg" });




export const pegaEstatisticas = (rodadas: Rodada[], time: number): Linha => {

    const linha: Linha = {
        time:timesMap.get(time),
        amarelos: 0,
        azuis: 0,
        derrotas: 0,
        empates: 0,
        golsFeitos: 0,
        golsPegos: 0,
        vermelhos: 0,
        vitorias: 0
    }
    rodadas.map(rodada => {
        console.log("Rodada ", rodada.descricao);
        rodada.jogos.filter(jogo => jogo.finalizado && (jogo.mandante.time == time || jogo.visitante.time == time)).map(
            
            jogo => {
                
                const mandante = timesMap.get(jogo.mandante.time);
                const visitante = timesMap.get(jogo.visitante.time);
                console.log("Jogo ", mandante?.nome, " X ", visitante?.nome);
                console.log(linha.amarelos);
                console.log(jogo);
                if(jogo.eventos && jogo.eventos.length>0){
                    jogo.mandante.amarelos = 0;
                    jogo.mandante.azuis = 0;
                    jogo.mandante.vermelhos = 0;
                    jogo.visitante.amarelos = 0;
                    jogo.visitante.azuis = 0;
                    jogo.visitante.vermelhos = 0;
                    
                    jogo.eventos.forEach( ev =>{
                        if(ev.tipo != "gol"){
                            if(ev.time == mandante?.nome){
                                jogo.mandante.amarelos += (ev.tipo =="cartao_amarelo")?1:0;
                                jogo.mandante.azuis += (ev.tipo =="cartao_azul")?1:0;
                                jogo.mandante.vermelhos += (ev.tipo =="cartao_vermelho")?1:0;
                            }
                        }
                        if(ev.tipo != "gol"){
                            if(ev.time == visitante?.nome){
                                jogo.visitante.amarelos += (ev.tipo =="cartao_amarelo")?1:0;
                                jogo.visitante.azuis += (ev.tipo =="cartao_azul")?1:0;
                                jogo.visitante.vermelhos += (ev.tipo =="cartao_vermelho")?1:0;
                            }
                        }
                    })
                    
                    
                }
                if (jogo.mandante.time == time) {
                    linha.vitorias += jogo.mandante.gols > jogo.visitante.gols ? 1 : 0;
                    linha.derrotas += jogo.visitante.gols > jogo.mandante.gols ? 1 : 0;
                    linha.empates += jogo.visitante.gols == jogo.mandante.gols ? 1 : 0;
                    linha.golsFeitos += jogo.mandante.gols;
                    linha.golsPegos += jogo.visitante.gols;
                    linha.amarelos += jogo.mandante.amarelos;
                    linha.azuis += jogo.mandante.azuis;
                    linha.vermelhos += jogo.mandante.vermelhos;
                } else if (jogo.visitante.time == time) {
                    linha.vitorias += jogo.visitante.gols > jogo.mandante.gols ? 1 : 0;
                    linha.derrotas += jogo.mandante.gols > jogo.visitante.gols ? 1 : 0;
                    linha.empates += jogo.mandante.gols == jogo.visitante.gols ? 1 : 0;
                    linha.golsFeitos += jogo.visitante.gols;
                    linha.golsPegos += jogo.mandante.gols;
                    linha.amarelos += jogo.visitante.amarelos;
                    linha.azuis += jogo.visitante.azuis;
                    linha.vermelhos += jogo.visitante.vermelhos;
                }
                console.log(linha.amarelos);
            }
        )
    })
    return linha;
}

export const artilheiros: { nome: string, time: string, gols: number }[] = [
    {
        nome: "Robinho",
        time: nomeTimes.Real,
        gols: 1
    },
    {
        nome: "Romário",
        time: nomeTimes.Roma,
        gols: 1
    },
    {
        nome: "Serginho",
        time: nomeTimes.Bayern,
        gols: 1
    },
    {
        nome: "Brasivaldo",
        time: nomeTimes.Roma,
        gols: 2
    },
    {
        nome: "Eurivan",
        time: nomeTimes.Roma,
        gols: 1
    },
    {
        nome: "Andrelino",
        time: nomeTimes.Internazionale,
        gols: 2
    },
    {
        nome: "Fiel",
        time: nomeTimes.Bayern,
        gols: 1
    },
    {
        nome: "Daniel Rios",
        time: nomeTimes.Bayern,
        gols: 1
    },
    {
        nome: "Jorge",
        time: nomeTimes.Barcelona,
        gols: 1
    },
    {
        nome: "Paulinho",
        time: nomeTimes.Bayern,
        gols: 1
    },
    {
        nome: "Vitor Silva",
        time: nomeTimes.Internazionale,
        gols: 1
    },
    {
        nome: "Pedro Cruz",
        time: nomeTimes.Barcelona,
        gols: 1
    },
    {
        nome: "Irineu",
        time: nomeTimes.Roma,
        gols: 1
    },
    {
        nome: "Emerson",
        time: nomeTimes.Roma,
        gols: 1
    },

]

export const punidos: { nome: string, time: string, amarelo: number, azul: number, vermelho: number }[] = [
    {
        nome: "Walison",
        time: nomeTimes.Real,
        amarelo: 2,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Irineu",
        time: nomeTimes.Roma,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Fábio",
        time: nomeTimes.Roma,
        amarelo: 2,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Silvio",
        time: nomeTimes.Bayern,
        amarelo: 0,
        azul: 0,
        vermelho: 1
    },
    {
        nome: "Ricardo",
        time: nomeTimes.Bayern,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Cleyton",
        time: nomeTimes.Barcelona,
        amarelo: 2,
        azul: 0,
        vermelho: 1
    },
    {
        nome: "João Marcos",
        time: nomeTimes.Barcelona,
        amarelo: 0,
        azul: 0,
        vermelho: 1
    },
    {
        nome: "Henrique",
        time: nomeTimes.Internazionale,
        amarelo: 2,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Guilherme",
        time: nomeTimes.Internazionale,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Pedro Lucas",
        time: nomeTimes.Internazionale,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "James",
        time: nomeTimes.Barcelona,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Fernando Cardoso",
        time: nomeTimes.Barcelona,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Ferdinand",
        time: nomeTimes.Internazionale,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Romário",
        time: nomeTimes.Roma,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
    {
        nome: "Emerson",
        time: nomeTimes.Roma,
        amarelo: 1,
        azul: 0,
        vermelho: 0
    },
]
