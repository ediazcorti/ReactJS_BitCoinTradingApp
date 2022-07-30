import React from "react";
import Table from "./Table/Table";
import { ObtenerTransacciones } from "../../../Services/ServiceAsync";
import { useEffect } from "react";
import { useState } from "react";



const Main = ({usuario}) => { 

    let apiKeyString = 'd75a3403a8c3a0cf3d2de50c51b8e36d' 
    console.log('usuario', usuario)


    const[transacciones,setTransacciones]= useState ([])

useEffect(() => {

    const CargarTablaTransacciones = (a) =>  {
        setTransacciones(a)
        console.log(a)
       }

    try {
 ;(async ( ) => {
    

    const response= await ObtenerTransacciones(apiKeyString, usuario.id).then(value => CargarTablaTransacciones (value.transacciones))
 })()
          
    } catch (error) {
        
        console.log(error)
    }

},[])

    return (
        <>
        <h1>BIENVENIDO/A AL HOME {usuario.id}</h1>
        <p>Usted está logeado</p>
        <Table transacciones={transacciones}> </Table>
        </>
    )
}

export default Main;