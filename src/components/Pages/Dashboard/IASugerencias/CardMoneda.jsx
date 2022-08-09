import React from "react";

const CardMoneda = ({monedas, monedaId, tipoUltimaOperacion, valorUltTransacc, valorActualMoneda, recomendacion }) => { 

    const EncontrarNombreMoneda = (id) => {
        let moneda = monedas.listaMonedas.find(item => item.id === id)
        return moneda ? moneda.nombre : 0
      }

    return  (
        <div className="card">
     
    
   
    <h4>Nombre de moneda:</h4>
    <h3 class="text-primary">{EncontrarNombreMoneda(monedaId)}</h3>
     {/* <h5 class="card-title">ID Moneda: </h5>
     <p class="card-text">{monedaId} </p> */}

    <h6>Tipo de Última Operacion:</h6>
    {tipoUltimaOperacion == 1 ? "Compra" : "Venta"}
    <br />
    <h6>Valor de la última transacción:</h6>
    <p class="card-text"> {valorUltTransacc}</p>
    <h6>Valor actual de esta Moneda:</h6>
    <p class="card-text">{valorActualMoneda}</p>
    <br />
    <h6>La recomendación es:</h6>
    <p class="card-text">{recomendacion}</p>
  <br />
    
   

 
</div>

    
  
    )
}

export default CardMoneda