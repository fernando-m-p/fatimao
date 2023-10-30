"use client"
import { Rodada } from "@/app/model/interfaces"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { timesMap } from "@/app/jogos"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { Button } from "./ui/button"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import Link from "next/link"
import { useSession } from "next-auth/react"

export default function CardsAdmin({ rodadas }: { rodadas: Rodada[] }) {
    const session = useSession();

    return (
        <div className="grid md:grid-cols-2 p-4 gap-6 text-center">
            {rodadas.map((rodada) => {
                return (

                    <Card key={JSON.stringify(rodada)}>
                        <CardHeader>
                            {rodada.descricao}
                        </CardHeader>
                        <CardContent>
                            {
                                rodada.jogos.map(
                                    (jogoa, index) => {
                                        const mandante = timesMap.get(jogoa.mandante.time);
                                        const visitante = timesMap.get(jogoa.visitante.time);
                                        const ganhou = jogoa.mandante.gols - jogoa.visitante.gols
                                        return (
                                            <Card key={JSON.stringify(jogoa)} className="my-2">
                                                <CardHeader className="flex justify-between flex-row">
                                                    <div>
                                                        {`${jogoa.data} - ${jogoa.hora}`}
                                                    </div>
                                                    <div>
                                                        {jogoa.local}
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="flex">

                                                    <div className="flex  flex-1 md:justify-between">
                                                        <div className="flex md:justify-start flex-1">
                                                            <Image src={mandante?.escudo || ""} alt={`Escudo do time ${mandante?.nome}`} width={60} height={60} className="h-20 w-20" />
                                                            <p className={`hidden md:flex text-xl ${ganhou > 0 ? "font-bold" : "font-normal"} my-auto mx-4 whitespace-nowrap `}>
                                                                {`${mandante?.nome}`}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-rows text-3xl font-bold my-auto">
                                                            <p>
                                                                {` ${jogoa.finalizado ? jogoa.mandante.gols : " "}`}
                                                            </p>

                                                            -
                                                            <p>
                                                                {`${jogoa.finalizado ? jogoa.visitante.gols : ""}`}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-end flex-1">
                                                            <p className={`hidden md:flex text-xl ${ganhou < 0 ? "font-bold" : "font-normal"} my-auto mx-4 whitespace-nowrap `}>

                                                                {` ${timesMap.get(jogoa.visitante.time)?.nome}`}

                                                            </p>
                                                            <Image src={visitante?.escudo || ""} alt={`Escudo do time ${visitante?.nome}`} width={60} height={60} className="h-20 w-20" />

                                                        </div>



                                                    </div>


                                                </CardContent>
                                                <CardFooter className="justify-center">
                                                    {session.data?.user.admin &&
                                                        <Link href={`/admin/rodada/${rodada.index}/jogos/${index}`}>
                                                            <Button variant={jogoa.finalizado ? "secondary" : "default"} size={"lg"}>
                                                                {jogoa.finalizado ? "Alterar" : "Adicionar"}
                                                            </Button>
                                                        </Link>
                                                    }
                                                </CardFooter>
                                            </Card>
                                        )
                                    }
                                )
                            }

                        </CardContent>

                    </Card >
                )
            })
            }
        </div >
    )
}