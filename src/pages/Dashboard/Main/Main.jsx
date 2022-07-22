import React from "react";
import Home from "./Home";
import Login from "../../Login/Login";
const Main = ({logeado, usuario}) => {

return (
<>
<h1>MAIN</h1>
{usuario != null ? <Home /> : <Login  loginFunction={logeado} getUsuario={usuario}/>} 

</>

)

}
export default Main