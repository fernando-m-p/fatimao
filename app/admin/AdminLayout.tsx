"use client"
import { useSession } from 'next-auth/react';
import LoginPage from './login';

export default function GetLayout({
    children
}: {
    children: React.ReactNode
}) {
    const session = useSession();
    return (
        <>
            {
                !session.data ?
                    <LoginPage /> :
                    children
            }


        </>
    )
}
