import React from 'react';
import { useRef } from 'react';
import Login from './Login'
import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const LoginForm = ({ onLoginUser, retornarLogin, login, getUsuario }) => {
    const inputUserName = useRef();
    const inputPassword = useRef();


    // const  onLoginUser = () => ({
    //     apiKey : apiKey,
    //     id: id
    // })

    const onHandleLogin = async () => {
        const userName = inputUserName.current.value;
        const password = inputPassword.current.value;

        if (userName !== '' && password !== '' ) { 
        console.log("Input User Valido")

        const response = await login(userName, password)
        const user = {apiKey: response.apiKey, id: response.id}

        // NO ME RECONOCE RETORNAR LOGIN POR MAS QUE LO PUSE COMO REFERENCIA EN LOGIN.JS a "LOGEAR"
        retornarLogin(user)

        }else{
        console.log("Input de user o password no válido")
        }


    }


    return (
        <>

            <label >User</label>
            <input type="text" ref={inputUserName} />
            <br />
            <label >password</label>
            <input type="text" ref={inputPassword} />
            <br />

              {/* <input type="button" value="Logearse" onClick={onHandleLogin} /> */}

 
              <input type="button" value="Logearse" onClick={onHandleLogin} />

        </>
    )
}

export default LoginForm