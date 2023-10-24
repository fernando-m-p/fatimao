import { DashboardHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Admin() {

    

    return (
        <div>
            <DashboardHeader heading='Fatimão 2023' src='/escudo.png'>
                <Link href={"/"}>
                    <Button variant={"outline"}>Home</Button>
                </Link>
            </DashboardHeader>

        </div>
    )
}