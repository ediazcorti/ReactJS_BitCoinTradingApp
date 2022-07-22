import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
// import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer'

//test1

function App() {
 
 // USUARIO
  const [usuario, setUsuario] = useState(null);
 // SETUSUARIO
 const logeado = (a) =>  {
  setUsuario(a)
  console.log(a)
 }

  

  return (

    <BrowserRouter>
    <Header getUsuario={usuario}/>
        <Routes>
          <Route path="/Login" element={<LoginPage  loginFunction={logeado} />} />
        </Routes>      
      <Footer />
    </BrowserRouter>

  );
}




export default App;
