import { AuthContext } from "../Contexts/Auth";
import { useContext } from "react";

export const UseAuth = () => {
    const context = useContext(AuthContext)
    
    return context
}