import { createContext } from "react"
import { IUser } from "../../Interfaces";

interface AuthContextValue {
    user: any; 
    isAuth: boolean;
    signIn: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;
    signOut: () => void;
  }
export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)