import { Icons } from "./icons";
import { SelectItem } from "./ui/select";

export function SelectItemsCatoes(){
    return(
        <>
                                                                                            <SelectItem value="cartao_amarelo"  >
                                                                                        <div className="relative">

                                                                                            <span className="block w-8 h-8 absolute -right-8">
                                                                                                {Icons.card("yellow", {})}
                                                                                            </span>
                                                                                            <p className="flex flex-row ">

                                                                                                Amarelo
                                                                                            </p>
                                                                                        </div>
                                                                                    </SelectItem>
                                                                                    <SelectItem value="cartao_azul">
                                                                                        <div className="relative">

                                                                                            <span className="block w-8 h-8 absolute -right-8">
                                                                                                {Icons.card("blue", {})}
                                                                                            </span>
                                                                                            <p className="flex flex-row ">

                                                                                                Azul
                                                                                            </p>
                                                                                        </div>
                                                                                    </SelectItem>
                                                                                    <SelectItem value="cartao_vermelho">
                                                                                        <div className="relative">

                                                                                            <span className="block w-8 h-8 absolute -right-8">
                                                                                                {Icons.card("red", {})}
                                                                                            </span>
                                                                                            <p className="flex flex-row ">

                                                                                                Vermelho
                                                                                            </p>
                                                                                        </div>
                                                                                    </SelectItem>
        </>
    )
}
