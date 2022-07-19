import './App.css';
import React from 'react';
// import Layout from './components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer'

//test1

function App() {
  return (

    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
        </Routes>      
      <Footer />
    </BrowserRouter>

  );
}




export default App;
