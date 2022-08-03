import React from 'react';
import { useRef } from 'react';
import Login from '../Login';
import { useSelector,useDispatch } from 'react-redux';
import {setLoginUser, setLogutUser} from  '../../../../app/slices/userSlice';
import {login} from '../../../../Services/ServiceAsync';
import  Button  from '../../../UI/Button/Button';
//import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const LoginForm = () => {
    const inputUserName = useRef()
    const inputPassword = useRef()
  
    const dispatch = useDispatch()
  
    const onHandleLogin = async e => {
      e.preventDefault()
      const userName = inputUserName.current.value
      const password = inputPassword.current.value
  
      if (userName !== '' && password !== '') {
        try {
          const { apiKey, id } = await login(userName, password)
          const user = { apiKey: apiKey, id: id }
          dispatch(setLoginUser(user))
        } catch (error) {
          alert('Ha ocurrido un error', error)
        }
      } else {
        alert('Por favor complete los campos')
      }
    }
    return (
      <>
        <form>
          <label>Username</label>
          <br />
          <input className='form-control' type='text' ref={inputUserName} />
          <br />
          <label>Password</label>
          <br />
          <input className='form-control' type='password' ref={inputPassword} />
          <br />
          <br />
          <Button
            cta='Login'
            classColor={'btn-primary'}
            onHandleClick={onHandleLogin}
          />
        </form>
      </>
    )
  }
  
  export default LoginForm