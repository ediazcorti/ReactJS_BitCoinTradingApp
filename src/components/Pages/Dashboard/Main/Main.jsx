import React from "react";
import Table from "./Table/Table";
import { ObtenerTransacciones } from "../../../../Services/ServiceAsync";
import { useEffect } from "react";
import { useState } from "react";
import {setLoginUser, setLogoutUser} from  '../../../../app/slices/userSlice';
import {setTransacciones} from  '../../../../app/slices/transactionSlice';
import { useSelector } from "react-redux";


const Main = () => { 
    const usuario = useSelector((state) => state.user.user)
   // let apiKeyString = '75d870b288276d3978a4b205552d42b5' 
    console.log('usuario', usuario)

const transacciones= useSelector ((state) => state.transactions.transactions);

useEffect(() => {

    const CargarTablaTransacciones = (a) =>  {
        setTransacciones(a)
        console.log(a)
       }

    try {
 ;(async ( ) => {
    

 })()
          
    } catch (error) {
        
        console.log(error)
    }

},[usuario])

    return (
        <div className="col-11 mx-auto">
      
        <h1>BIENVENIDO/A AL HOME</h1>
        <p>Usted está logeado</p>
        <Table transacciones={transacciones}> </Table>
      
        </div>
    )
}

export default Main;