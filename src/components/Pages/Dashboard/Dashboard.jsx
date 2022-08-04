import React, { useEffect } from "react";
import Main from "../Dashboard/Main/Main";
import Login from "../Login/Login";
import Button from "../../UI/Button/Button";
import { useSelector , useDispatch } from 'react-redux';
import { getUser, setLoginUser, setLogoutUser } from  '../../../app/slices/userSlice'



const Dashboard = () => {
const usuario = useSelector((state) => state.user)
console.log("El usuario en DASHBOARD ES")
console.log(usuario)
const dispatch = useDispatch()
// const deslogearse = dispatch(setLogoutUser())

const nombreUser = () => { 
  
    // console.log(props)
     if (usuario.user.id != null ) {
        
         // const { id } = props.getUsuario
         const id = usuario.id
        return (
            <div>
                Bienvenido, {id} 
                <br />
                <Button
             cta='Deslogearse'
             classColor={'btn-primary'}
             onHandleClick={() =>  dispatch(setLogoutUser()) }
           />
            </div>
        )
     }
     else { 
         return false
       // console.log("Usuario No Loggeado")
     }
    }

useEffect(() => {

}, [usuario]);

return (
<>
<h1>MAIN</h1>
<h5>ID DE USUARIO ACTUAL ES: </h5> 
{usuario.user.id}
{nombreUser()}

{usuario != null ? <Main /> : <Login />} 

</>

)

}
export default Dashboard