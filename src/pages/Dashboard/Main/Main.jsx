import React from "react";
import Table from "./Table/Table";
import { ObtenerTransacciones } from "../../../Services/ServiceAsync";
import { useEffect } from "react";
import { useState } from "react";



const Main = ({usuario}) => { 
    console.log('usuario', usuario)


    const[transacciones,setTransacciones]= useState ([])

useEffect(() => {

    const CargarTablaTransacciones = (a) =>  {
        setTransacciones(a)
        console.log(a)
       }

    try {
 ;(async ( ) => {
    

    const response= await ObtenerTransacciones('6d318f57d1687d157216701d7a8d4a4c',usuario.id).then(value => CargarTablaTransacciones (value.transacciones))
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