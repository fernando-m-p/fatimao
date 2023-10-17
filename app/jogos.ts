import {Pontucao, Rodada, Time, Linha, Jogo} from "@/app/model/interfaces"

export const enum nomeTimes {
    Bayern = "Bayern de Munique",
    Roma = "Roma",
    Real ="Real Madrid",
    Barcelona = "Barcelona",
    Internazionale="Internazionale"
}


const enum horarios{
    primeiro = "19:30",
    segundo = "20:40"
}
const local = "ADUFPI"

export const timesMap:Map<nomeTimes,Time> = new Map<nomeTimes,Time>();
timesMap.set(nomeTimes.Bayern, {nome: nomeTimes.Bayern,abreviado: "BAY",escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/bayern-de-munique.svg"});
timesMap.set(nomeTimes.Roma, {nome: nomeTimes.Roma,abreviado: "ROM",escudo: "https://s.sde.globo.com/media/teams/2018/03/12/roma.svg"});
timesMap.set(nomeTimes.Real, {nome: nomeTimes.Real,abreviado: "REL",escudo: "https://s.sde.globo.com/media/teams/2018/03/12/real-madrid.svg"});
timesMap.set(nomeTimes.Barcelona, {nome: nomeTimes.Barcelona,abreviado: "BAY",escudo: "https://s.sde.globo.com/media/teams/2018/03/11/barcelona.svg"});
timesMap.set(nomeTimes.Internazionale, {nome: nomeTimes.Internazionale,abreviado: "BAY",escudo: "https://s.sde.globo.com/media/organizations/2021/03/31/Inter_de_Mil%C3%A3o_2021.svg"});


const rodada1Turno1:Rodada = { descricao:"1ª RODADA - 1º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Roma),gols:3,amarelos: 2,azuis: 0,vermelhos: 0},
            visitante:{time:timesMap.get(nomeTimes.Bayern),gols:1,amarelos:0,azuis:0,vermelhos:0},
            data:"20/09/2023",
            finalizado:true,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Real),gols:1,amarelos: 1,azuis: 0,vermelhos: 0},
            visitante:{time:timesMap.get(nomeTimes.Barcelona),gols:0,amarelos:0,azuis:0,vermelhos:0},
            data:"20/09/2023",
            finalizado:true,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada2Turno1:Rodada = { descricao:"2ª RODADA - 1º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Internazionale),gols:2,amarelos: 2,azuis: 0,vermelhos: 0},
            visitante:{time:timesMap.get(nomeTimes.Real),gols:0,amarelos:1,azuis:0,vermelhos:0},
            data:"27/09/2023",
            finalizado:true,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Bayern),gols:2,amarelos: 1,azuis: 0,vermelhos: 1},
            visitante:{time:timesMap.get(nomeTimes.Barcelona),gols:0,amarelos:1,azuis:0,vermelhos:2},
            data:"27/09/2023",
            finalizado:true,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada3Turno1:Rodada = { descricao:"3ª RODADA - 1º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Barcelona),gols:1,amarelos: 0,azuis: 0,vermelhos: 0},
            visitante:{time:timesMap.get(nomeTimes.Roma),gols:1,amarelos:0,azuis:0,vermelhos:0},
            data:"04/10/2023",
            finalizado:true,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Internazionale),gols:0,amarelos: 2,azuis: 0,vermelhos:0},
            visitante:{time:timesMap.get(nomeTimes.Bayern),gols:1,amarelos:0,azuis:0,vermelhos:0},
            data:"04/10/2023",
            finalizado:true,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada4Turno1:Rodada = { descricao:"4ª RODADA - 1º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Barcelona),gols:1,amarelos: 1,azuis: 0,vermelhos: 0},
            visitante:{time:timesMap.get(nomeTimes.Internazionale),gols:1,amarelos:1,azuis:0,vermelhos:0},
            data:"11/10/2023",
            finalizado:true,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Real), gols:0, amarelos:0, azuis:0, vermelhos:0},
            visitante:{time:timesMap.get(nomeTimes.Roma), gols:2, amarelos:3, azuis:0, vermelhos:0},
            data:"11/10/2023",
            finalizado:true,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada5Turno1:Rodada = { descricao:"5ª RODADA - 1º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Bayern),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Real),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"18/10/2023",
            finalizado:false,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Roma),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Internazionale),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"18/10/2023",
            finalizado:false,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada1Turno2:Rodada = { descricao:"1ª RODADA - 2º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Roma),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Bayern),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"25/10/2023",
            finalizado:false,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Real),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Barcelona),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"25/10/2023",
            finalizado:false,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada2Turno2:Rodada = { descricao:"2ª RODADA - 2º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Internazionale),gols:2,amarelos: 2,azuis: 0,vermelhos: 0},
            visitante:{time:timesMap.get(nomeTimes.Real),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"01/11/2023",
            finalizado:false,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Bayern),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Barcelona),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"01/11/2023",
            finalizado:false,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada3Turno2:Rodada = { descricao:"3ª RODADA - 2º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Barcelona),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Roma),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"08/11/2023",
            finalizado:false,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Internazionale),gols:0,amarelos: 2,azuis: 0,vermelhos:0},
            visitante:{time:timesMap.get(nomeTimes.Bayern),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"08/11/2023",
            finalizado:false,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada4Turno2:Rodada = { descricao:"4ª RODADA - 2º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Barcelona),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Internazionale),gols:1,amarelos:1,azuis:0,vermelhos:0},
            data:"15/11/2023",
            finalizado:false,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Real),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Roma),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"15/11/2023",
            finalizado:false,
            hora:horarios.segundo,
            local
        }
    ]
}
const rodada5Turno2:Rodada = { descricao:"5ª RODADA - 2º TURNO", 
    jogos:[
        {
            mandante:{time:timesMap.get(nomeTimes.Bayern),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Real),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"22/11/2023",
            finalizado:false,
            hora:horarios.primeiro,
            local
        },
        {
            mandante:{time:timesMap.get(nomeTimes.Roma),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            visitante:{time:timesMap.get(nomeTimes.Internazionale),gols:0, amarelos:0, azuis:0, vermelhos:0 },
            data:"22/11/2023",
            finalizado:false,
            hora:horarios.segundo,
            local
        }
    ]
}

export const campeonato = {rodadas: [rodada1Turno1,rodada2Turno1, rodada3Turno1, rodada4Turno1, rodada5Turno1,rodada1Turno2,rodada2Turno2, rodada3Turno2, rodada4Turno2, rodada5Turno2]}




export const pegaEstatisticas = (rodadas:Rodada[], time:Time):Linha=>{
    
    const linha:Linha =  {
        time,
        amarelos:0,
        azuis:0,
        derrotas:0,
        empates:0,
        golsFeitos:0,
        golsPegos:0,
        vermelhos:0,
        vitorias:0
    }
    rodadas.map(rodada =>{
        rodada.jogos.filter(jogo=> jogo.finalizado && (jogo.mandante.time==time || jogo.visitante.time==time)).map(
            jogo =>{
                if(jogo.mandante.time == time){
                    linha.vitorias += jogo.mandante.gols>jogo.visitante.gols?1:0;
                    linha.derrotas += jogo.visitante.gols>jogo.mandante.gols?1:0;
                    linha.empates += jogo.visitante.gols==jogo.mandante.gols?1:0;
                    linha.golsFeitos += jogo.mandante.gols;
                    linha.golsPegos += jogo.visitante.gols;
                    linha.amarelos += jogo.mandante.amarelos;
                    linha.azuis += jogo.mandante.azuis;
                    linha.vermelhos += jogo.mandante.vermelhos;
                }else if (jogo.visitante.time == time){
                    linha.vitorias += jogo.visitante.gols>jogo.mandante.gols?1:0;
                    linha.derrotas += jogo.mandante.gols>jogo.visitante.gols?1:0;
                    linha.empates += jogo.mandante.gols==jogo.visitante.gols?1:0;
                    linha.golsFeitos += jogo.visitante.gols;
                    linha.golsPegos += jogo.mandante.gols;
                    linha.amarelos += jogo.visitante.amarelos;
                    linha.azuis += jogo.visitante.azuis;
                    linha.vermelhos += jogo.visitante.vermelhos;
                }
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
        azul:0,
        vermelho:0
    },
    {
        nome: "Irineu",
        time: nomeTimes.Roma,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Fábio",
        time: nomeTimes.Roma,
        amarelo: 2,
        azul:0,
        vermelho:0
    },
    {
        nome: "Silvio",
        time: nomeTimes.Bayern,
        amarelo: 0,
        azul:0,
        vermelho:1
    },
    {
        nome: "Ricardo",
        time: nomeTimes.Bayern,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Cleyton",
        time: nomeTimes.Barcelona,
        amarelo: 2,
        azul:0,
        vermelho:1
    },
    {
        nome: "João Marcos",
        time: nomeTimes.Barcelona,
        amarelo: 0,
        azul:0,
        vermelho:1
    },
    {
        nome: "Henrique",
        time: nomeTimes.Internazionale,
        amarelo: 2,
        azul:0,
        vermelho:0
    },
    {
        nome: "Guilherme",
        time: nomeTimes.Internazionale,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Pedro Lucas",
        time: nomeTimes.Internazionale,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "James",
        time: nomeTimes.Barcelona,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Fernando Cardoso",
        time: nomeTimes.Barcelona,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Ferdinand",
        time: nomeTimes.Internazionale,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Romário",
        time: nomeTimes.Roma,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
    {
        nome: "Emerson",
        time: nomeTimes.Roma,
        amarelo: 1,
        azul:0,
        vermelho:0
    },
]
