import React, {ChangeEvent, useContext, useState} from 'react'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

import * as C from "./styles"

import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from '../../Contexts/Auth'


export const LoginPage = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()


  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleLogin = () => {
    if (email === '' || password === ''){
      setError("Fill In All Fields")
    } else {
      try {
        signIn(email, password)
        alert("Successfully Authenticated User")
        navigate("/")
      } catch(e){
        setError("User not found")
      }
    }

     
   }

  return (
    <C.Container>

      <C.Label>Login</C.Label>
        <C.Content>
          <Input
          type='email'
          placeholder='Type your e-mail...'
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>

          <Input
          type='password'
          placeholder='Type your password...'
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>

          <C.LabelError>{error}</C.LabelError>

          <Button onClick={handleLogin} Text='Enter'/>

          <C.LabelSignUp>
            Dont have an account?
            <C.Strong>
              <Link to="/Register">
                Register now
              </Link>
            </C.Strong>
          </C.LabelSignUp>
        </C.Content>

    </C.Container>
  )
}
