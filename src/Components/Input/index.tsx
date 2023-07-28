import React, {ChangeEvent} from 'react'
import { TextField }from './styles'


interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
  }
export const Input: React.FC<InputProps> = ({ value, onChange, type, placeholder}) => {
  return (
    <TextField
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    />
  )
}
