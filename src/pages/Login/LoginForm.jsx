import React from 'react';
import { useRef } from 'react';
import Login from './Login'
import { useSelector,useDispatch } from 'react-redux';
import {setLoginUser} from  '../../app/slices/userSlice'

import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const LoginForm = ({ onLoginUser, login  }) => {
    const dispatch = useDispatch();
    
    const inputUserName = useRef();
    const inputPassword = useRef();


    // const  onLoginUser = () => ({
    //     apiKey : apiKey,
    //     id: id
    // })

    const onHandleLogin = async (e) => {
       e.preventDefault()
        const userName = inputUserName.current.value;
        const password = inputPassword.current.value;

        if (userName !== '' && password !== '' ) { 
        console.log("Input User Valido")

        const response = await login(userName, password)        
        dispatch(setLoginUser(response))
           
        // const user = {apiKey: response.apiKey, id: response.id}

        // NO ME RECONOCE RETORNAR LOGIN POR MAS QUE LO PUSE COMO REFERENCIA EN LOGIN.JS a "LOGEAR"
        // retornarLogin(user)
        // console.log(dispatch(setLoginUser(user)))
        // dispatch(setLoginUser(user))
        // const user = dispatch(setLoginUser(response))
       
        // console.log(props.dispatch(setLoginUser(usuario)))
        // loginFunction(user)

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