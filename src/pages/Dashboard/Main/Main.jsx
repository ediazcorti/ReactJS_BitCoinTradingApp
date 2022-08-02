import React from "react";
import Table from "./Table/Table";
import { ObtenerTransacciones } from "../../../Services/ServiceAsync";
import { useEffect } from "react";
import { useState } from "react";
import {setLoginUser, setLogoutUser} from  '../../../app/slices/userSlice'
import { useSelector } from "react-redux";


const Main = () => { 
    const usuario = useSelector((state) => state.usuario)
    let apiKeyString = '75d870b288276d3978a4b205552d42b5' 
    console.log('usuario', usuario)


    const[transacciones,setTransacciones]= useState ([])

useEffect(() => {

    const CargarTablaTransacciones = (a) =>  {
        setTransacciones(a)
        console.log(a)
       }

    try {
 ;(async ( ) => {
    

   // const response= await ObtenerTransacciones(apiKeyString, usuario.id).then(value => CargarTablaTransacciones (value.transacciones))
    console.log("Sin terminar")
 })()
          
    } catch (error) {
        
        console.log(error)
    }

},[usuario])

    return (
        <>
        <h1>BIENVENIDO/A AL HOME</h1>
        <p>Usted está logeado</p>
        <Table transacciones={transacciones}> </Table>
        </>
    )
}

export default Main;