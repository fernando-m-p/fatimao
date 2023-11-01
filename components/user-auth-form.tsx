"use client"
import * as React from "react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { Icons } from "./icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const session = useSession();

    return (
        <>

            <div className={cn("grid gap-6", className)} {...props}>
                
                <Button type="submit" onClick={()=>signIn()}>
                    <p className="w-4 h-4 mr-2">
                        {Icons.google({})}
                    </p>
                    Logar
                </Button>

            </div>
        </>
    )
}