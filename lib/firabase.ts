// Import the functions you need from the SDKs you need
import { timesMap } from "@/app/jogos";
import { Jogo, JogoTime, Rodada } from "@/app/model/interfaces";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { error } from "console";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithCredential, signInWithCustomToken, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";

import { child, get, getDatabase, ref, set, update } from "firebase/database";
import { getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn, useSession } from "next-auth/react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_ENV_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_ENV_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_ENV_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_ENV_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_ENV_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_ENV_APPID,
    measurementId: process.env.NEXT_PUBLIC_ENV_MEASUREMENTID,
    databaseURL: process.env.NEXT_PUBLIC_ENV_DATABASEURL
};



// Initialize Firebase

interface rodadasAPIType {
    descricao: string,
    jogos: {
        data:string,
        finalizado:boolean,
        hora:string,
        local:string,
        mandante:{ 
            amarelos:number, 
            azuis:number, 
            gols:number, 
            time:number, 
            vermelhos:number 
        }
        visitante:{ 
            amarelos:number, 
            azuis:number, 
            gols:number, 
            time:number, 
            vermelhos:number 
        }
    }[]
}

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const getMyDataBase = () => {
    return getDatabase(app);
}

export const getRodadas = async () => {
    const rodadas:Rodada[] = []
    const dbRefer = ref(getDatabase());
    await get(child(dbRefer, "rodadas/")).then(snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(child=>{
                const val:Rodada = child.val();
                val.index = child.key;
                console.log(val);
                rodadas.push(
                    val
                );
            });
            return rodadas;
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return rodadas;
}

// TODO - Fazer a função para alterar o jogo passando uma rodada, um indice de jogo e o JSON do jogo

export const gravarJogo = async ({rodada,idJogo, jogo, token, acess_token}:{rodada:string, idJogo:string, jogo:Jogo, token:string|undefined, acess_token:string|undefined})=>{
    
    const auth = getAuth(app);
    const credential = GoogleAuthProvider.credential(token,acess_token);;
    signInWithCredential(auth, credential).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
    const dbRefer = getDatabase(app);
    console.log(dbRefer, jogo);
    await update(ref(dbRefer,`rodadas/${rodada}/jogos/${idJogo}`),
    jogo
    
    ).then(()=>{
        console.log("Salvo");
    }).catch(error=>{
        console.log(error);
    });
    console.log(dbRefer);
    
}

export const getRodada = async ({id}:{id:string}) => {
    const rodada:Rodada = {} as Rodada;
    const dbRefer = ref(getDatabase());
    return await get(child(dbRefer, `rodadas/${id}`)).then(snapshot => {
        if (snapshot.exists()) {
            const val:Rodada = snapshot.val();
            console.log(val);
            return val;
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return rodada;

}


export const getJogo = async ({rodada,idJogo}:{rodada:string, idJogo:string}) => {
    const jogo:Jogo = {} as Jogo;
    const dbRefer = ref(getDatabase());
    return await get(child(dbRefer, `rodadas/${rodada}/jogos/${idJogo}`)).then(snapshot => {
        if (snapshot.exists()) {
            const val:Jogo = snapshot.val();
            console.log(val);
            return val;
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return jogo;

}

export async function signInFireBase(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function getUser() {
    const user = auth.currentUser;
    return auth.currentUser;
}

export function singOut() {
    const auth2 = getAuth();
    signOut(auth2);
}

