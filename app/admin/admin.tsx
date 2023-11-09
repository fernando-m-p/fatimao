import { getRodadas } from "@/lib/firabase";
import CardsAdmin from "@/components/cardsAdmin";
import DashboardHeaderAdmin from "@/components/DashBoardHeaderAdmin";



export default async function AdminPage() {
    
    const rodadasState = await getRodadas();
    return (
        <>
            <DashboardHeaderAdmin/>
            {
                <CardsAdmin rodadas={rodadasState}/>
            }

        </>

    )
}


