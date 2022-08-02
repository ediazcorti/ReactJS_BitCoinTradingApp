import React, { useEffect } from "react";
import Main from "./Main/Main";
import Login from "../Login/Login";
import { useSelector , useDispatch } from 'react-redux';
import {setLoginUser, setLogoutUser} from  '../../app/slices/userSlice'


const Dashboard = () => {
const usuario = useSelector((state) => state.user)
console.log("El usuario en DASHBOARD ES")
console.log(usuario)

useEffect(() => {

}, [usuario]);

return (
<>
<h1>MAIN</h1>
<h2>USUARIO ES: </h2>

{usuario != null ? <Main /> : <Login />} 

</>

)

}
export default Dashboard