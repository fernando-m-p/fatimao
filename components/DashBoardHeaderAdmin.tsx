"use client"
import { signOut, useSession } from "next-auth/react";
import { DashboardHeader } from "./header";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function DashboardHeaderAdmin() {
    const session = useSession();
    const user = session.data?.user;
    return (
        <>
            <DashboardHeader heading='Fatimão 2023' src='/escudo.png'>
                <Avatar >
                    <AvatarImage src={user?.image || ""} alt={`Avatar do usuário ${user?.name}`} />
                    <AvatarFallback>{user?.name}</AvatarFallback>
                </Avatar>

                <Button variant={"outline"} onClick={() => { signOut() }}>Sair</Button>

            </DashboardHeader>

        </>
    )
}