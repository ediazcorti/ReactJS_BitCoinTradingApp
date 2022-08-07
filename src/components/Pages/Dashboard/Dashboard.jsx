import React, { useEffect } from "react";
import Main from "../Dashboard/Main/Main";
import Login from "../Login/Login";
import Button from "../../UI/Button/Button";
import { useSelector , useDispatch } from 'react-redux';
import { getUser, setLoginUser, setLogoutUser } from  '../../../app/slices/userSlice'
import "./Dashboard.css"


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
         const id = usuario.user.id
         
        return (
            <div>
                Bienvenido, su id de usuario es: {id} 
                <br />
                <br />
                <Button
             cta='Deslogearse'
             classColor={'btn-danger'}
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
<br />
<h1>Crypto Trading Dashboard</h1>
{/* <h5>ID DE USUARIO ACTUAL ES: </h5> 
{usuario.user.id} */}
{/* <h5>Apikey es {usuario.user.apiKey}</h5> */}
<br />
{nombreUser()}
<br />
{usuario != null ? <Main /> : <Login />} 
<br />
</>

)

}
export default Dashboard