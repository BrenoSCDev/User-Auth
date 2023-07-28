import { UseAuth } from '../Hooks'
export const validation = () => {
    const {isAuth} = UseAuth()
    if(isAuth === true){
        return true
    } else{
        return false
    }
}
