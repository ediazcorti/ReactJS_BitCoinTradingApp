import React from "react";
import Main from "./Main";
import Login from "../../Login/Login";
const Dashboard = ({logeado, usuario}) => {

return (
<>
<h1>MAIN</h1>
{usuario != null ? <Main /> : <Login  loginFunction={logeado} getUsuario={usuario}/>} 

</>

)

}
export default Dashboard