import { useNavigate } from "react-router-dom";
import { SignOutButton } from "../../Components/Button";
import { UseAuth } from "../../Hooks";
import * as C from "./styles";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const {signOut} = UseAuth()
  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <SignOutButton Text="SignOut" onClick={() => [signOut(), navigate("/Login")]}/>
    </C.Container>
  );
};

