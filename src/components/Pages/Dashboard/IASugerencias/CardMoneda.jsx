import React from "react";

const CardMoneda = ({monedaId, tipoUltimaOperacion, valorUltTransacc, valorActualMoneda, recomendacion }) => { 



    return  (
    <>
    <h1>CARD</h1>
    <div className="Card">
    <p>{monedaId}</p>
    <p>{tipoUltimaOperacion}</p>
    <p>{valorUltTransacc}</p>
    <p>{valorActualMoneda}</p>
    <p>{recomendacion}</p>




    </div>

    
    </>
    )
}

export default CardMoneda