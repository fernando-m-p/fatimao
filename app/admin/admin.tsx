"use client"
import { DashboardHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getRodadas } from "@/lib/firabase";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Rodada } from "../model/interfaces";
import CardsAdmin from "@/components/cardsAdmin";



export default function AdminPage() {
    const session = useSession();
    const user = session.data?.user;
    const [rodadasState, setRodadasState] = useState({rodadas:[]} as {rodadas:Rodada[]})
    
    useEffect(() => {
        
            const fetchData = async () => getRodadas();
            
            const result = fetchData().then(
                res => {    
                    setRodadasState({rodadas:res});
                    return res;
                }
                );
                
    }, []);


    return (
        <>
            <DashboardHeader heading='Fatimão 2023' src='/escudo.png'>
                <Avatar >
                    <AvatarImage src={user?.image || ""} alt={`Avatar do usuário ${user?.name}`} />
                    <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>

                <Button variant={"outline"} onClick={() => { signOut() }}>Sair</Button>

            </DashboardHeader>
            
            {
                <CardsAdmin rodadas={rodadasState.rodadas}/>
            }

        </>

    )
}


