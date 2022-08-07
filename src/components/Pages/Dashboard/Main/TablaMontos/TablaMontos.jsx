import React, { useEffect } from "react";
import TableItemRow from "../Table/TableItemRow";
import { useSelector, useDispatch } from "react-redux";
import transactionSlice from "../../../../../app/slices/transactionSlice";
import coinSlice from "../../../../../app/slices/coinSlice";
import { useState } from "react";

const TablaMontos = () => {
    const transacciones = useSelector((state) => state.transactions.transactions);
    const monedas = useSelector((state) => state.coin)
    const dispatch = useDispatch()

    let listaCompras = []
    let listaVentas = []
    //  let montoTotalCompras1 = 0

  // 1. UseState de montoTotalCompras y Ventas y Total
  const [montoTotalC, setMontoTotalC] = useState([0]);
  const [montoTotalV, setMontoTotalV] = useState([0]);
  const [montoTotalFinal, setMontoTotalFinal] = useState([0]);
  // 2. Funcion para Setear el montoTotalCompras

  const setearMontoCompras = (a) =>  {
    setMontoTotalC(a)
    console.log("RECIBI ESTE RESULTADO EN COMPRAS")
    console.log(montoTotalC)
   }

   const setearMontoVentas = (a) =>  {
    console.log(montoTotalV)
    setMontoTotalV(a)
    console.log("RECIBI ESTE RESULTADO EN VENTAS")
    console.log(montoTotalV)
   }

   const setearMontoTotal = (a) =>  {
    setMontoTotalFinal(a)
    console.log("RECIBI ESTE RESULTADO EN TOTAL")
    console.log(montoTotalFinal)
   }

//    const initialValue = 0;
// const montoTotalCompras = listaCompras.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// Object.keys(data).reduce

    const obtenerMontoCompras =  () => { 
        
        // console.log("Valor de cada compra ============> ")
        // listaCompras.map((compra) =>  console.log(compra.cantidad * compra.valor_actual))

        // filter((transaction) => transaction.tipo_operacion == 1 ? listaCompras.push(transaction) : null)

        let montoTotalCompras = listaCompras.reduce((acumulado, compra) => acumulado + (
            compra.cantidad * compra.valor_actual)
            
      , 0);
         console.log("El monto  total de compras es:___________________")
        //  console.log(montoTotalCompras)
         setearMontoCompras(montoTotalCompras)
         console.log(montoTotalC)
    }

    const obtenerMontoVentas =  () => { 
        
        // console.log("Valor de cada compra ============> ")
        // listaCompras.map((compra) =>  console.log(compra.cantidad * compra.valor_actual))

        // filter((transaction) => transaction.tipo_operacion == 1 ? listaCompras.push(transaction) : null)

        let montoTotalVentas = listaVentas.reduce((acumulado, venta) => acumulado + (
            venta.cantidad * venta.valor_actual)
            
      , 0);
         console.log("El monto  total de VENTAS es:___________________")
        //  console.log(montoTotalCompras)
         setearMontoVentas(montoTotalVentas)
         console.log(montoTotalVentas)
    }

    const obtenerMontoTotal = () => {
        let montoTotal = montoTotalC - montoTotalV
        setearMontoTotal(montoTotal)
        console.log("Monto Total es", montoTotal)
    }

    useEffect(() => {
        try {
            transacciones.filter((transaction) => transaction.tipo_operacion == 1 ? listaCompras.push(transaction) : null)
            console.log("TRANSACCIONES COMPRAS = = = = = = = =")
            console.log(listaCompras)
            // console.log(listaCompras[1])
            transacciones.filter((transaction) => transaction.tipo_operacion == 2 ? listaVentas.push(transaction) : null)
            console.log("TRANSACCIONES Ventas = = = = = = = =")
            console.log(listaVentas)
            obtenerMontoCompras()
            obtenerMontoVentas()
            obtenerMontoTotal()
        } catch (error) {
            //   dispatch(setLogoutUser())
            console.log("Error en UseEffect que filtra compras y ventas")
        }
    }, [transacciones])




    // listaCompras = transacciones.filter((transaction) =>  transaction.tipo_operacion == 1)
    // console.log("TRANSACCIONES COMPRAS = = = = = = = =")
    // // transacciones.filter((transaction) => transaction.tipo_operacion == 1 ? listaCompras.push(transaction) : null)
    // // transacciones.filter((transaction) => transaction.tipo_operacion != 1 ? listaVentas.push(transaction) : null)
    // console.log(listaCompras)
    

    return (
        <>
                <h5 className="text-primary">Montos totales de Compras y Ventas en la cuenta</h5>
            <table className='table table-info table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Monto de Compras</th>
                        <th scope='col'>Monto de Ventas</th>
                        <th scope='col'>Monto Total Invertido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{montoTotalC}</td>
                        <td>{montoTotalV}</td>
                        <td>{montoTotalFinal}</td>
                    </tr>
                </tbody>

            </table>


        </>
    )
}

export default TablaMontos