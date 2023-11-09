"use client"

import { useSession } from "next-auth/react";
import { CardFooter } from "./ui/card";
import { ReactNode } from "react";

export default function CardFooterAdmin({children}:{children:ReactNode}){
    const session = useSession();

    return(
        <CardFooter className="justify-center">
        {session.data?.user.admin &&
            children
        }
        </CardFooter>

    )
}