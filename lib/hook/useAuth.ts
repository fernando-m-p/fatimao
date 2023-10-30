import { useContext } from "react";
import { AuthContext } from "@/lib/context/authcontext";


const useAuth = () =>{
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;