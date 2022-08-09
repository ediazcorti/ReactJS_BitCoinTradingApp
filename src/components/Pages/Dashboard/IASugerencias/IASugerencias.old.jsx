import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import CardMoneda from "./CardMoneda";
import { useEffect } from "react";


const IASugerencias = ({ transacciones, obtenerMonedas, monedas, apiKey, ObtenerTransacciones, user }) => {
    const dispatch = useDispatch()


    let listaTransacciones = []
    console.log("MONEDAS DENTRO DE IA SUGERENCIAS ES ----------------------", monedas)
    console.log("TRANSACCIONES DENTRO DE IA SUGERENCIAS ES", transacciones)
    console.log("LA APIKEY ES", apiKey)
    console.log("EL USUARIO ACTUAL ES", user)
    console.log("FIN DE IASUGERENCIAS--------------------------------------------------")
    let ultimaTransaccId = 0
    const mapMonedasUltimaTrans = [] // { monedaId: id, ultTrans: {} }

    const buscarMonedaUltTransac = (id) => {
        return mapMonedasUltimaTrans.find((item) =>  item.monedaId == id)
    }


 const construirSugerencias = () => { 
    transacciones.map((transaction) => {
        const monedaBuscada = buscarMonedaUltTransac(transaction.moneda)

        if (monedaBuscada) {

            monedaBuscada.ultTrans = transaction

        } else {
            mapMonedasUltimaTrans.push(
                {
                    monedaId: transaction.moneda,
                    ultTrans: transaction

                }

            )
        }
    })

 }

 useEffect(() => {
    construirSugerencias()
    console.log("1 MAPA MONEDAS ULTIMA TRANSACCION EN IA SUGERENCISA --------------", mapMonedasUltimaTrans)

}, [])


    useEffect(() => {
        construirSugerencias()
        console.log("2 MAPA MONEDAS ULTIMA TRANSACCION EN IA SUGERENCISA --------------", mapMonedasUltimaTrans)
    }, [transacciones, mapMonedasUltimaTrans])




    // FUNCION DE RECOMENDACION:
    const recomendacion = ({ valorActualMoneda, valorUltTransacc, tipoUltimaOperacion }) => {
        let recom = ""

        // SI FUE COMPRA Y EL VALOR DE LA MONEDA ES MAYOR?::::
        if (valorActualMoneda > valorUltTransacc && tipoUltimaOperacion == 1) {
            recom = "Vender"
            // SI FUE COMPRA Y EL VALOR ES MENOR
        } else if (valorActualMoneda < valorUltTransacc && tipoUltimaOperacion == 1) {
            recom = "Comprar"

            // Si fue una VENTA y el Valor BAJÓ
        } else if (valorActualMoneda < valorUltTransacc && tipoUltimaOperacion != 1) {

            recom = "Comprar"
        } else {
            recom = "Vender"
        }

        return recom

    }

    const EncontrarValorActualMoneda = (id) => {
        let moneda = monedas.listaMonedas.find((item) =>  item.monedaId == id )
        return moneda.cotizacion

    }

    return (
        <>
            <div id="contenedor" className="container">
                <h1>Contenedor </h1>

{  mapMonedasUltimaTrans.map(( obj ) => <CardMoneda monedaId={obj.monedaId} tipoUltimaOperacion={obj.ultTrans.tipo_operacion}
                    valorUltTransacc={obj.ultTrans.valor_actual} valorActualMoneda={EncontrarValorActualMoneda(obj.monedaId)} 
                />) 
                   
                    }

            </div>
        </>

    )


}

export default IASugerenciasOLD