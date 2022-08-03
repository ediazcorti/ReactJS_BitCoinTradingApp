import './App.css';
import React from 'react';
import Login from './components/Pages/Login/Login';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector , useDispatch } from 'react-redux';
import "bootstrap-css-only"
import Header from './components/Pages/Dashboard/Header/Header';
import Registro from '../src/components/Pages/Registro/Registro'
//import { setLoginUser } from './app/slices/userSlice';
//import { login } from './Services/ServiceAsync';
//test1

function App() {
 
const userDeslogeado = (props) => { 
return (
  <>
  <br />
<Login/>
<br />
<Registro/>
</>
) 

}

const userLogged = useSelector ((state) => state.user.user)

  return (<div className= 'App'>
   
    {!userLogged ? (userDeslogeado()): (<Dashboard />)}</div>
  
  
  )
}




export default App;





 // USUARIO
//  let usernotLogged = true
//  console.log(usuario)
//  useEffect( () => {
//  usernotLogged = false; 
//  }, [] ) 
//  const [usuario, setUsuario] = useState(null);



 
  
 // function  loggeduser () { if (usuario!= null || usuario != undefined) { return true} } 
 // SETUSUARIO
//  const logeado = (a) =>  {
//   setUsuario(a)
//   console.log(a)
//  }




//  const [items, setItems] = useState([]);
/*
  useEffect(() => {
  
  }, [usuario]);*/
