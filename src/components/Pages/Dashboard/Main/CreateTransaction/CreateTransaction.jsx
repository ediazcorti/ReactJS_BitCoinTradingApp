import React from 'react';
import { useRef } from 'react';
import Login from '../Login';
import { useSelector,useDispatch } from 'react-redux';
import {setTransaction} from  '../../../../../app/slices/transactionSlice';
import  Button  from '../../../UI/Button/Button';
//import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const CreateTransaction = () => {
  const inputSlcMoneda = useRef()
  const inputSlcOperacion = useRef()




   const monedas = useSelector ((state) => state.coin.listaMonedas )
    const dispatch = useDispatch()
  //hago los usereff
    const onHandleTransaction = async e => {
      e.preventDefault()
    //recibo los datos
      if (inputSlcMoneda != '' && inputSlcOperacion != undefined) {
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
        
        <select name="slsTipoOperacion" id="tipoOperacion" ref={inputSlcOperacion}>
            <option value="1">Compra</option>
            <option value="2">Venta</option>
        </select>
          <br />
          <br />
          <select name="slcMoneda" id="slcmoneda" ref={inputSlcMoneda}>
          <option value="">Seleccionar Departamento</option>
            {monedas.map((moneda) => {
              return (
                <option key={moneda.id} value={moneda.id} >
                  Moneda id: {moneda.id}
                </option>
              );
            })} 

          </select>
          <br />
          <br />

          <Button
            cta='Agregar Transaccion'
            classColor={'btn-primary'}
            onHandleClick={onHandleTransaction}
          />
        </form>
      </>
    )
  }
  
  export default LoginForm