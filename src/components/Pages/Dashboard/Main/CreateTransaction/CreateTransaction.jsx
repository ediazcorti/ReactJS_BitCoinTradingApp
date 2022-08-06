import React from 'react';
import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
 import { setTransacciones, addNewTransaction, listarMontoCompras } from  '../../../../../app/slices/transactionSlice';
 import { agregarTransaccion } from '../../../../../Services/ServiceAsync';
import Button from '../../../../UI/Button/Button';

//import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const CreateTransaction = ({monedas}, apiKey ) => {
  const inputSlcMoneda = useRef()
  const inputSlcOperacion = useRef()
  const inputCantidad = useRef()
  const usuario = useSelector((state) => state.user)
 // COPIAR Y PEGAR LOS STATES DE SLC DPTO Y SLC CIUDAD PARA ESTO 


  //  const monedas = useSelector ((state) => state.coin.listaMonedas )
    const dispatch = useDispatch()
  //hago los usereff
    const onHandleTransaction = async e => {
      e.preventDefault()
    //recibo los datos
    const monedaElegida = inputSlcMoneda.current.value
    const cantidad = inputCantidad.current.value
    const tipoOperacion = inputSlcOperacion.current.value
    
      console.log("ApiKey utilizada")
      console.log(usuario.user.apiKey)

      console.log("La moneda elegida fue ")
      console.log(monedaElegida)

      console.log("La cantidad elegida fue ")
      console.log(cantidad)

      console.log("Tipo de operacion elegida fue ")
      console.log(tipoOperacion)     

      console.log("Cotizacion de moneda elegida es ")
      

      
      const obtenerCotizacionMoneda = (idMoneda) => { 
        
        const monedaEncontrada = monedas.find(moneda => {
          return  moneda.id === idMoneda 
        });
        return monedaEncontrada.cotizacion
      }

      if (monedaElegida != "" && tipoOperacion != "" && cantidad > 1) {
        try {
           //PONER FETCH.RESPONSE > dispatch
           // apiKey, idUsuario, tipoOperacion, moneda, cantidad, valorActual
          
          // 1 
         
         const { idTransaccion } =  agregarTransaccion(usuario.user.apiKey, usuario.user.id, tipoOperacion, monedaElegida, cantidad, obtenerCotizacionMoneda(monedaElegida) )   
         console.log(idTransaccion)
        
        
         // const newTransaction = {            
          //  id : idTransaccion,
          //  usuarios_id : usuario.user.id,
          //  tipo_operacion: 
          // }
          // const user = { apiKey: apiKey, id: id,idDepartamento:idDepartamento,idCiudad:idCiudad }
              // 2 Actualizo mi store con el objeto          
            // dispatch(addNewTransaction(newTransaction))


return console.log("SE HIZO EL FETCH")

          }
        
        
          // dispatch(setTransacciones(transaccion))
       //  const {codigo , id } = await agregarTransaccion(usuario.user.apiKey, usuario.user.id, tipoOperacion, monedaElegida, cantidad, obtenerCotizacionMoneda(monedaElegida) )   
        
        // OBtener transacciones y pasarle el dispatch
        //  dispatch(addNewTransaction())
        // dispatch(setTransacciones())
         catch (error) {
          alert('Ha ocurrido un error en CreateTransaction', error)
        }
      } else {
        alert('Por favor complete los campos')
      }
    }
  


    return (
      <>
        <form>
        
        
          <br />
          <br />
          <select name="slcMoneda" id="slcmoneda" ref={inputSlcMoneda}>
          <option value="">SeleccionarMoneda</option>        
          { monedas.listaMonedas ? 
            monedas.listaMonedas.map(
                    (moneda) => {
                        return (
                          <option key={moneda.id} value={moneda.id} >
                  Moneda id: {moneda.id}
                </option>
                          
                        );
                      }) : null
                                   }


          </select>

            <input type="number" name="cantidadMonedas" id="cantidadMonedas" ref={inputCantidad} />

          <select name="slsTipoOperacion" id="tipoOperacion" ref={inputSlcOperacion}>
            <option value="1">Compra</option>
            <option value="2">Venta</option>
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
  
  export default CreateTransaction