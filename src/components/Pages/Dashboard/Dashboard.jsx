import React, { useEffect } from "react";
import Main from "../Dashboard/Main/Main";
import Login from "../Login/Login";
import { useSelector} from 'react-redux';


const Dashboard = () => {
const usuario = useSelector((state) => state.user)
console.log("El usuario en DASHBOARD ES")
console.log(usuario)

useEffect(() => {

}, [usuario]);

return (
<>
<h1>MAIN</h1>
<h5>ID DE USUARIO ACTUAL ES: </h5> 
{usuario.user.id}

{usuario != null ? <Main /> : <Login />} 

</>

)

}
export default Dashboard