import React from "react";
import Table from "./Table/Table";
import { ObtenerTransacciones, getCoins } from "../../../../Services/ServiceAsync";
import { useEffect } from "react";
import { useState } from "react";
import {setLoginUser, setLogoutUser} from  '../../../../app/slices/userSlice';
import {setTransacciones} from  '../../../../app/slices/transactionSlice';
import { useSelector, useDispatch } from "react-redux";
import  Button  from '../../../UI/Button/Button';
import {setMonedas} from  '../../../../app/slices/coinSlice';
import { setToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../../../../utils/storage';
import TableItemRow from "./Table/TableItemRow";
import CreateTransaction from "./CreateTransaction/CreateTransaction";
import TablaMontos from "./TablaMontos/TablaMontos";
// import Bar from "../Charts/Bar";
import BarCompra from "../Charts/Bar/BarCompra";
import BarVenta from "../Charts/Bar/BarVenta/BarVenta";
import BarMoneda from "../Charts/Bar/BarMoneda/BarMoneda";
import IASugerencias from "../IASugerencias/IASugerencias";

const Main = () => { 
  const ColoredLine = ({ color, opacity }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 20,
            opacity: opacity,

        }}
    />
)


const dispatch = useDispatch();
const objeto = getFromLocalStorage("apiKey")


    const usuario = useSelector((state) => state.user)
   // let apiKeyString = '75d870b288276d3978a4b205552d42b5' 
    console.log('usuario', usuario)

const transacciones= useSelector ((state) => state.transactions.transactions);
const monedas = useSelector ((state) => state.coin)

// const obtenerMonedas = () => { getCoins.then( (response) => { dispatch(setMonedas(response.monedas) ) } ) }
const obtenerMonedas = (objeto) => {
    getCoins(objeto.apiKey)
    .then((response) => response.json())
    .then((result) =>   { 
    
    const arrayMonedas = result.monedas
    console.log("array de monedas updated es")
    console.log(arrayMonedas)
    dispatch(setMonedas(arrayMonedas))
    console.log("Dispatch de monedas resultado:") 
console.log(arrayMonedas) 
return monedas})
      


}


// useEffect(() => {
    

// //     try {
// //  ;(async ( ) => {
    

// //  })()
          
//     // } catch (error) {
        
//     //     console.log(error)
//     // }

// },[usuario])

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

    return (
        <div className="col-11 mx-auto">
       
        {/* <h1>BIENVENIDO/A AL HOME</h1> */}
        
        <p>Usted está logeado</p>  <hr />
       <ColoredLine color="Grey" opacity="5"/>
        {/* <h5>Apikey en Main es {usuario.user.apiKey}</h5> */}
        {/* <Button
            cta='GetCoins'
            classColor={'btn-primary'}
            onHandleClick={ getCoins.then( (response) => { dispatch(setMonedas(response.monedas) ) } )}
          />     */}
        
     
          
            {/* 
            TESTEAR LISTA MONEDAS
            { monedas.listaMonedas ? 
            monedas.listaMonedas.map(
                    (moneda) => {
                        return (
                          <p>
                            {moneda.id}         
                            {moneda.nombre}                   
                          </p>
                          
                        );
                      }) : null
                                   } */}

        <TablaMontos/>
        <ColoredLine color="DarkBlue" opacity="80"/>
        <IASugerencias  ObtenerTransacciones={ObtenerTransacciones} transacciones={transacciones} user={usuario.user} obtenerMonedas={obtenerMonedas} monedas={monedas}  apiKey={usuario.user.apiKey} />
        <ColoredLine color="Grey" opacity="5"/>
        <BarCompra monedas={monedas} />
        <ColoredLine color="Grey" opacity="5"/>
        <BarVenta monedas={monedas} />
        <ColoredLine color="DarkBlue" opacity="80" />
        <CreateTransaction monedas={monedas} apiKey={usuario.user.apiKey} obtenerMonedas={obtenerMonedas}/>
        <ColoredLine color="DarkBlue" opacity="80" />
        <BarMoneda ObtenerTransacciones={ObtenerTransacciones} />
        <ColoredLine color="Orange" opacity="80" /><br />
        <h4>Tabla de transacciones del usuario</h4><br />

        <Table transacciones={transacciones} obtenerMonedas={obtenerMonedas} monedas={monedas} />
      
        </div>
    )
}

export default Main;