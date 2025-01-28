import { createContext, Dispatch, SetStateAction } from "react";

export type AuthType = {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>    
}

export const AuthContext = createContext<AuthType>({
    isAuth: false,
    setIsAuth: () => {}
})