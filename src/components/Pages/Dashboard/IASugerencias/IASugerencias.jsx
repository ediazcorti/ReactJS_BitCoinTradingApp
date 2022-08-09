import React, { useEffect, useState } from 'react'
import CardMoneda from './CardMoneda'
const IASugerencias = ({
  transacciones,
  monedas
}) => {
  const [mapMonedasUltimaTrans, setMapMonedasUltimaTrans] = useState([])
  const buscarMonedaUltTransac = (id, partialArray) => {
    return partialArray.find(item => item.monedaId == id)
  }
  const _construirSugerencias = () => {
    const partialArray = []
    transacciones.map(transaction => {
      const monedaBuscada = buscarMonedaUltTransac(
        transaction.moneda,
        partialArray
      )
      if (monedaBuscada) {
        monedaBuscada.ultTrans = transaction
      } else {
        if (transaction.moneda !== 0) {
          partialArray.push({
            monedaId: transaction.moneda,
            ultTrans: transaction
          })
        }
      }
    })
    setMapMonedasUltimaTrans(partialArray)
  }
  useEffect(() => {
    _construirSugerencias()
  }, [transacciones])
  // FUNCION DE RECOMENDACION:
  const recomendacion = (
    valorActualMoneda,
    valorUltTransacc,
    tipoUltimaOperacion
  ) => {
     let recom = 'Default'
    // SI FUE COMPRA Y EL VALOR DE LA MONEDA ES MAYOR?::::
    if (valorActualMoneda > valorUltTransacc && tipoUltimaOperacion == 1) {
      recom = 'Vender'
      // SI FUE COMPRA Y EL VALOR ES MENOR
    } else if (
      valorActualMoneda < valorUltTransacc &&
      tipoUltimaOperacion == 1
    ) {
      recom = 'Comprar'
      // Si fue una VENTA y el Valor BAJÓ
    } else if (
      valorActualMoneda < valorUltTransacc &&
      tipoUltimaOperacion !== 1
    ) {
       recom = 'Comprar'
    } else {
      recom = 'Vender'
    }
    return recom
  }
  const EncontrarValorActualMoneda = id => {
    let moneda = monedas.listaMonedas.find(item => item.id === id)
    return moneda ? moneda.cotizacion : 0
  }
  return (
    <>
      <div id='contenedor' className='container'>
        <h1>Contenedor </h1>
        {mapMonedasUltimaTrans.map(obj => (
          <CardMoneda monedas={monedas}
            monedaId={obj.monedaId}
            tipoUltimaOperacion={obj.ultTrans.tipo_operacion}
            valorUltTransacc={obj.ultTrans.valor_actual}
            valorActualMoneda={EncontrarValorActualMoneda(obj.monedaId)}
            recomendacion={recomendacion(EncontrarValorActualMoneda(obj.monedaId), obj.ultTrans.valor_actual, obj.ultTrans.tipo_operacion )}
            />
        ))}
      </div>
    </>
  )
}
export default IASugerencias