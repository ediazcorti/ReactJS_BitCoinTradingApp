import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
// import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login/Login';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer'
import Dashboard from './pages/Dashboard/Main/Dashboard';
import Registro from './pages/Registro/Registro'
import 'bootstrap/dist/css/bootstrap.min.css';


import "bootstrap-css-only"
//test1

function App() {
 


 // USUARIO
//  let usernotLogged = true
//  console.log(usuario)
//  useEffect( () => {
//  usernotLogged = false; 
//  }, [] ) 
 const [usuario, setUsuario] = useState(null);



 
  
 // function  loggeduser () { if (usuario!= null || usuario != undefined) { return true} } 
 // SETUSUARIO
 const logeado = (a) =>  {
  setUsuario(a)
  console.log(a)
 }




//  const [items, setItems] = useState([]);

//  useEffect(() => {
//    localStorage.setItem('logged', JSON.stringify(logged));
//  }, []);


  return (

    <BrowserRouter>
    <Header getUsuario={usuario}/>
        <Routes> 

        <Route path="/"  element= {<Dashboard logeado={logeado} usuario={usuario} />} />      
        <Route path="/Registro"  element= {<Registro/>} />    


        </Routes>      
      <Footer />
    </BrowserRouter>

  );
}

// {/* <Route path="/"  element= { usuario != null ? <Main/> : <Login  loginFunction={logeado} getUsuario={usuario}/>} />
//           {/* <Route path=""  element= { usuario != null ? <Main/> : <Login  loginFunction={logeado} getUsuario={usuario}/>} /> */}
//           <Route path="/Login"  element= { usuario == null ? <Main/> : <Login  loginFunction={logeado} getUsuario={usuario}/>} /> */}
{/* <Route path="/Login"  element= { usuario == null ? <Main/> : <Login  loginFunction={logeado} getUsuario={usuario}/>} /> */}


export default App;
