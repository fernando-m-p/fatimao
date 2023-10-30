"use client"
import * as React from "react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const session = useSession();

    return (
        <>

            <div className={cn("grid gap-6", className)} {...props}>
                <p> Logado como {session.data?.user?.email}</p>

                <Button type="submit" onClick={()=>signIn()}>
                    Logar
                </Button>

            </div>
        </>
    )
}