import { createBrowserRouter } from "react-router-dom"

import { Home } from "../Pages/Home"
import { LoginPage } from "../Pages/Login"
import { RegisterPage } from "../Pages/Register"

import { validation } from "./validation"

    
    const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
      if (validation()) {
        return element
      } else {
        return <LoginPage />
      }
    }
    
   export const router = createBrowserRouter([
      {
          path: "/",
          element: <PrivateRoute element={<Home/>}/>
          // element: <Home/>
        },
      {
          path: "/Login",
          element: <LoginPage/>,
      },
      {
          path: "/Register",
          element: <RegisterPage/>,
      },
  ])
