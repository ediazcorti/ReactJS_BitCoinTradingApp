import React from 'react';
import LoginForm from '../Login/LoginForm/LoginForm';
import "./Login.css"
// import { useSelector , useDispatch } from 'react-redux';
// // import {setLoginUser} from  '../../app/slices/userSlice'
// import { useEffect } from 'react';

//const BASE_URL = "https://crypto.develotion.com/"






const Login = () => {
    return (
      <>
        <section className='d-flex flex-md justify-content-center login'>
          <div className='card'>
            <h3>Login screen</h3>
            <section className='card-body'>
              <LoginForm />
            </section>
          </div>
        </section>
      </>
    )
  }
  
  export default Login
  