import {ChangeEvent, useContext, useState} from 'react'

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

import * as C from "./styles"

import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from '../../Contexts/Auth'


export const RegisterPage = () => {

  const {signUp} = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>("")
  const [emailConf, setEmailConf] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleRegister = () => {
    if (email === "" || emailConf === "" || password === ""){
      setError("Fill In All Fields")
    } else if (email !== emailConf){
      setError("Your Email Credentials Do Not Match")
    } else {
      try {
         signUp(email, password)
         alert('Successfully Registered User')
         navigate("/Login")
      }catch(e){
        setError("Failed to register")
      }
    }
  }


  return (
    <C.Container>
      <C.Label>Register</C.Label>
        <C.Content>
          <Input
          type='email'
          placeholder='Type your e-mail...'
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>

          <Input
          type='email'
          placeholder='Confirm your e-mail...'
          value={emailConf}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmailConf(e.target.value)}/>

          <Input
          type='password'
          placeholder='Type your password...'
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>

          <C.LabelError>{error}</C.LabelError>

          <Button onClick={handleRegister} Text='Enter'/>

          <C.LabelSignUp>
            Already have an account?
            <C.Strong>
              <Link to="/Login">
                Login
              </Link>
            </C.Strong>
          </C.LabelSignUp>
        </C.Content>
    </C.Container>
  )
}
