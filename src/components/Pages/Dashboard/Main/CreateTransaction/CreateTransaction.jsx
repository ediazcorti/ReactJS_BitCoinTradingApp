import React from 'react';
import { useRef } from 'react';
import Login from '../Login';
import { useSelector,useDispatch } from 'react-redux';
import {setTransaction} from  '../../../../../app/slices/transactionSlice';
import  Button  from '../../../UI/Button/Button';
//import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const CreateTransaction = () => {
    
  
    const dispatch = useDispatch()
  //hago los usereff
    const onHandleTransaction = async e => {
      e.preventDefault()
    //recibo los datos
      if () {
        try {
          
          dispatch(setTransaction(transaction))
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
        
        <select name="slsTipoOperacion" id="tripoOperacion">
            <option value="1">Compra</option>
            <option value="2">Venta</option>
        </select>
          <br />
          <br />
          <select name="slcMoneda" id="moneda">
            
          </select>
          <br />
          <br />

          <Button
            cta='Login'
            classColor={'btn-primary'}
            onHandleClick={onHandleTransaction}
          />
        </form>
      </>
    )
  }
  
  export default LoginForm