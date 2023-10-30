"use client"
import '@/app/globals.css'
import AdminPage from '@/app/admin/page'
import { useSession } from 'next-auth/react';



export default function GetLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = useSession();
  return (
    <>
          {!session.data ?
              <AdminPage/>
            :
            children
          }
            

      </>
  )
}
