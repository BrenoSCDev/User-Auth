import React, {MouseEventHandler} from 'react'
import { CustomButton } from './Button'
interface ButtonProps {
    Text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    Type?: "button" | "submit" | "reset";
  }
  
  export const Button: React.FC<ButtonProps> = ({ Text, onClick, Type = "button" }) => {
  return (
    <CustomButton type={Type} onClick={onClick}>
        {Text}
    </CustomButton>
  )
}

interface ISignOutButtonProps {
  Text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  Type?: "button" | "submit" | "reset";
}
export const SignOutButton: React.FC<ISignOutButtonProps> = ({ Text, onClick, Type = "button"}) => {
  return(
  <CustomButton type={Type} onClick={onClick}>
    {Text}
  </CustomButton>
  )
}