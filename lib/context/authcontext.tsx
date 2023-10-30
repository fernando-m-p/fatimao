"use client"

import { createContext, useState, useEffect, use, Context } from "react";
import {getUser, signInFireBase, singOut} from "@/lib/firabase"

export const AuthContext = createContext({} as ProviderProps);

export interface ProviderProps {
    userToken?: {
        email: string
    }|undefined|null,
    signed?: boolean,
    sigOut: () => void
    sigIn: (email: string, password: string) => void
}
export const AuthProvider = ({ children }: any) => {
    const [userToken, setUser] = useState<{
        email: string
    }|null>();

    useEffect(() => {
        getUser().then(user=>{
            if(user){
                localStorage.setItem("user_loged", user.email||"")
            }
        })

    },[]);

    const sigIn = async (email: string, password: string) => {
        let retorno = {mensagem:""}
        const userToken = localStorage.getItem("user_loged");
        if (userToken){
            getUser().then( user =>{
                if(user?.email != userToken){
                    singOut();
                }
            })

        }
        // Pegar o usuário com o email e senha
        signInFireBase(email,password).then(userCredencial =>{
            if(userCredencial){
                localStorage.setItem("user_loged", userCredencial.user.email||"");
                setUser({ email: userCredencial.user.email||""});
            }
        }).catch(error=>{
            console.error(error.message);
        });
        ;
        
    }

    const sigOut = () => {
        singOut();
        localStorage.removeItem("user_loged");
        setUser(null);
        

    }


    return (
        <AuthContext.Provider value={{ userToken, signed: (!!userToken), sigIn, sigOut }}>
            {children}
        </AuthContext.Provider>);
}