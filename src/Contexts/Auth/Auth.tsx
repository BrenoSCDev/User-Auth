import { useState, useEffect } from "react"

import { IParent, IUser } from "../../Interfaces"

import { AuthContext } from "."

import axiosApi from "../../Services"

export const AuthProvider: React.FC<IParent> = ({ children }) => {
    const [user, setUser] = useState({})
    const [isAuth, setIsAuth] = useState<boolean>(false)
    useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const userStorage = localStorage.getItem("users_db")

        if (userToken && userStorage) {
            const getUser = JSON.parse(userStorage)?.
            filter((user: IUser) => user.email === JSON.parse(userToken).email)
            
            if (getUser) setUser(getUser[0])
        }
    }, [])
    
    const signIn = (email: string, password: string) => {
        const userStorage = localStorage.getItem("users_db")
        const users: IUser[] = userStorage ? JSON.parse(userStorage) : []
        const hasUser = users.filter((user: IUser) => user.email === email)
        
        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem("user_token", JSON.stringify({ email, token }))
                setUser({ email, password })
                if(token !== ''){
                    setIsAuth(true)
                }
            } else {
                return "E-mail ou senha incorreta"
            }
        } else {
            return "Usuário não cadastrado"
        }
    }

    const signUp = (email: string, password: string) => {
        const userStorage = localStorage.getItem("users_db")
        const users: IUser[] = userStorage ? JSON.parse(userStorage) : []
        const hasUser = users.filter((user: IUser) => user.email === email)

        if (hasUser?.length) {
            return "Já tem uma conta com este email"
        }

        let newUser
        if (userStorage) {
            newUser = [...users, { email, password }]
        } else {
            newUser = [{ email, password }]
        }
        localStorage.setItem("users_db", JSON.stringify(newUser))
        axiosApi.post("/users", newUser)

    }

    const signOut = () => {
        setUser({})
        localStorage.removeItem("user_token")
    }
    return (
        <AuthContext.Provider value={{ user, isAuth, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}