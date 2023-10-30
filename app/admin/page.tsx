"use client"

import { useSession } from "next-auth/react"
import LoginPage from "./login"
import  AdminPage  from "./admin"
import { getRodadas } from "@/lib/firabase";
import { Rodada } from "../model/interfaces";

  

export default function AuthenticationPage() {
    const session = useSession();
    
    return (
        <>
            { !session.data ?
                <LoginPage /> :
                <AdminPage />
            }
            
        </>

    )
}

