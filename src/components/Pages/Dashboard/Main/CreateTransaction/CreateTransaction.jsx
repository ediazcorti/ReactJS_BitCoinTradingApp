import React from 'react';
import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
 import { setTransacciones, addNewTransaction, listarMontoCompras,  } from  '../../../../../app/slices/transactionSlice';
 import { agregarTransaccion , ObtenerTransacciones} from '../../../../../Services/ServiceAsync';
import Button from '../../../../UI/Button/Button';
import { getCoins } from '../../../../../Services/ServiceAsync';
import { getFromLocalStorage } from '../../../../../utils/storage';
import { setMonedas } from '../../../../../app/slices/coinSlice';
import { useEffect } from 'react';

//import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom';



const CreateTransaction = ({obtenerMonedas}) => {
  const user = useSelector(state => state.user.user)

   const objeto = getFromLocalStorage("apiKey")
//   const obtenerMonedas = () => {
//     getCoins(objeto.apiKey)
//     .then((response) => response.json())
//     .then((result) =>   { 
    
//     const arrayMonedas = result.monedas
//     console.log("array de monedas updated es")
//     console.log(arrayMonedas)
//     dispatch(setMonedas(result.monedas))
//     console.log("Dispatch de monedas resultado:") 
// console.log(monedas) 
// return monedas}) }

  const monedas = useSelector ((state) => state.coin)
  
  const inputSlcMoneda = useRef()
  const inputSlcOperacion = useRef()
  const inputCantidad = useRef()
  const usuario = useSelector((state) => state.user)
 // COPIAR Y PEGAR LOS STATES DE SLC DPTO Y SLC CIUDAD PARA ESTO 

 useEffect(() => {
  
  //     getCoins(usuario.user.apiKey)
  //    .then((response) => response.json())
  //    .then((result) => dispatch(setMonedas(result.monedas) )) 
  console.log("APIKEY DE LA STORAGE DESDE MAIN ES = ")
  console.log(objeto.apiKey)
  obtenerMonedas(objeto)
  console.log("Las monedas ahora son")
  console.log(monedas.listaMonedas)
   ObtenerTransacciones()
  
      },[])


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

     

      
      const obtenerCotizacionMoneda = (idMoneda) => { 
        const listaMonedas = monedas.listaMonedas      

        // const monedaEncontrada = listaMonedas.find(moneda => {
        //   return  moneda.id == idMoneda 
        // });

        const monedaEncontrada = listaMonedas.find(obj => {
          return obj.id === idMoneda;
        });

        console.log("LA COTIZACION DE LA MONEDA ENCONTRADA ES!!!!!!!!!!!!!!!!!")
        console.log(monedaEncontrada.cotizacion)
        return monedaEncontrada.cotizacion
      }

      console.log("OBTENER LISTA MONEDAS EN CREATE TRANSACTION:::: RESULTADO:::")     
      console.log(obtenerCotizacionMoneda(Number(monedaElegida)))    

      // console.log("La cotizacion de la moneda ncontrada es")
      // // Acá se fija la moneda.cotizacion de la ID 1 y sale undefined???!!!
      // console.log((obtenerCotizacionMonedaFinal(Number(monedaElegida))))
     

      if (monedaElegida != "" && tipoOperacion != "" && cantidad > 0) {
        try {
           //PONER FETCH.RESPONSE > dispatch
           // apiKey, idUsuario, tipoOperacion, moneda, cantidad, valorActual
          
          // 1 

        // const apiKeyString = String(usuario.user.apiKey)
        // const apiKeyNumber= Number(usuario.user.apiKey)
        // const apiKeyComun = usuario.user.apiKey
        const apiKeyTest = objeto.apiKey
        const usuarioIdNumber =  Number(usuario.user.id)
        const tipoOperacionNumber = Number(tipoOperacion)
        const monedaElegidaNumber = Number(monedaElegida)
        const cantidadNumber = Number(cantidad)
        const cotizacionNumber =  obtenerCotizacionMoneda(Number(monedaElegida))

        console.log()

        //agregarTransaccion(usuario.user.apiKey, usuario.user.id, tipoOperacion, monedaElegida, cantidad, String(cotizacionNumber) ) 
       // const {idTransaction} = await 
       
       agregarTransaccion(apiKeyTest, usuarioIdNumber, tipoOperacionNumber, monedaElegidaNumber, cantidadNumber, cotizacionNumber )
     //  .then((response) => dispatch(addNewTransaction(response)))  
       .then((response) => dispatch(addNewTransaction(response) )

       
       )  
       const response2 = await ObtenerTransacciones(user.id)
       dispatch(setTransacciones(response2.transacciones))
          
      //  console.log("SE HIZO EL FETCH EXITOSAMENTE")
          
          // const newTransaction  = { 

          //   idUsuario: usuario.user.id,
          //   tipoOperacion: tipoOperacionNumber,
          //   moneda: monedaElegidaNumber,
          //   cantidad: cantidadNumber,
          //   valorActual: cotizacionNumber,
          // }
          

          // dispatch(addNewTransaction(newTransaction))
    // New transaction como la enviada por post:
      
        // New transaction version lo q viene del get:
          //const newTransaction = {            
           // id : idTransaccion,
           // usuarios_id : usuario.user.id,
          //  tipo_operacion: 
          // }
          // const user = { apiKey: apiKey, id: id,idDepartamento:idDepartamento,idCiudad:idCiudad }
              // 2 Actualizo mi store con el objeto          
            // dispatch(addNewTransaction(newTransaction))




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
      <h5 className="text-primary">Agregar Nueva Transacción:</h5>
        <form>
        
        
          <br />
          <label htmlFor="SelectMonedas">Seleccione su moneda</label><br />
          <select  className="form-control" name="slcMoneda" id="slcmoneda" ref={inputSlcMoneda}>
          <option selected value="" disabled>Moneda</option>        
          { monedas.listaMonedas ? 
            monedas.listaMonedas.map(
                    (moneda) => {
                        return (
                          <option key={moneda.id} value={moneda.id} >
                  Nombre Moneda: {moneda.nombre} <br />
                  ID: {moneda.id}
                </option>
                          
                        );
                      }) : null
                                   }


          </select>
          <br />
          <br />
          <label htmlFor="Cantidad">Cantidad:</label><br />
            <input className="form-control" min="0" type="number" name="cantidadMonedas" id="cantidadMonedas" ref={inputCantidad} />
            <br />
            <br />
            <label htmlFor="tipoOperacion">Tipo de Operación:</label><br />
          <select className="custom-select" name="slsTipoOperacion" id="tipoOperacion" ref={inputSlcOperacion}>
            <option value="1">Compra</option>
            <option value="2">Venta</option>
        </select>

          <br />
          <br />

          <Button
          
            cta='Agregar Transaccion'
            classColor={'btn-success'}
            onHandleClick={onHandleTransaction}
          />
        </form>
      </>
    )
  }
  
  export default CreateTransaction