import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';

//test1

function App() {
  return (
    <Layout className="Layout">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Bienvenido al registro / Login
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Layout>
  );
}

export default App;
