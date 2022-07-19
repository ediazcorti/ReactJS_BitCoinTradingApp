import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Login from './pages/Login';


//test1

function App() {
  return (

<BrowserRouter>
<Layout>
<Routes> 
<Route path="/" element={Login} />

</Routes>
</Layout>
</BrowserRouter> 

  );
}




export default App;
