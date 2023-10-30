"use client"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

export default function LoginPage(){
    return (

        <div className="container relative  h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">

        <Link
            href="/"
            className={cn(
                buttonVariants({ variant: "ghost" }),
                "absolute right-4 top-4 md:right-8 md:top-8"
            )}
        >
            Home
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-primary" />
            <div className="relative z-20 flex items-center text-lg font-medium">
                <img
                    className="h-10 w-auto"
                    src="/escudo.png"
                    alt=""
                />
                Fatimão.2023
            </div>
            <div className="relative z-20 mt-auto">
                <blockquote className="space-y-2">
                    <p className="text-lg">
                        &ldquo;Existe jogador de pelada e jogador de campeonato. Qual você é?&rdquo;
                    </p>
                    <footer className="text-sm">Autor desconhecido</footer>
                </blockquote>
            </div>
        </div>
        <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Fazer login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Se você é da comissão vai poder alterar os dados
                    </p>
                </div>
                <UserAuthForm />
                
            </div>
        </div>
    </div>

    )
}