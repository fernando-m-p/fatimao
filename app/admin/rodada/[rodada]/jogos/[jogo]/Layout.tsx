"use client"
import '@/app/globals.css'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';



export default function GetLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = useSession();
  return (
    <>
          {(!session.data?.user.admin) ?
              redirect("/admin")
            :
            children
          }
            

      </>
  )
}
