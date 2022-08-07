import ReactApexChart from 'react-apexcharts'
import { useSelector, useDispatch } from 'react-redux';



const Bar = () => {
  const monedas = useSelector ((state) => state.coin)
  const transacciones = useSelector((state) => state.transactions.transactions);
  let listaCompras = []
  const listaMonedas = monedas.listaMonedas
  transacciones.filter((transaction) => transaction.tipo_operacion == 1 ? listaCompras.push(transaction) : null)
  // console.log("LISTA COMPRAS EN BARRA ES==============================================================================", listaCompras)

  const listaMonedasConMonto = () => { 
 
    const ArrayMonedasConSuma = []     
  listaMonedas.forEach(moneda => {
    // Creo un array con todas los valores de transaccion de esta moneda
    const MonedaActualMonto = [ ]   
  transacciones.filter((transaction) => transaction.moneda == moneda.id ? MonedaActualMonto.push(transaction.valor_actual) : null)
 
  // Ahora sumo todos los montos de transacciones para esa moneda, y los guardo en una variable LET
 
  let suma = 0;  
  for (let i = 0; i < MonedaActualMonto.length; i++) {
      suma += MonedaActualMonto[i];
  }
  // suma = 456 
  // ArrayMonedasConSuma.push ( { monedaNombre: moneda.nombre , sumaMoneda : suma} )
  ArrayMonedasConSuma.push(suma)

  // Ahora retorno un string con el nombre de la moneda + su monto; y pongo esto en la barra

 //  let montoDineroMonedaActual = 

//  console.log("Transacciones de la moneda " + moneda.nombre + "son las siguientes" + MonedaActualMonto )

 
  });
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ARRAY DE MONEDAS CON SUMA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(ArrayMonedasConSuma)
 return ArrayMonedasConSuma

  // const MontosDeCompraPorMoneda = 
  // listaMonedas.map((moneda)  =>  

    



  //   listaCompras.reduce((acumulado, compra) => acumulado + (
  //     moneda.id == compra.moneda ? compra.valor_actual : 0      
  //     ), 0
  //     )    
      
  //     )
      
  
    
    
  //   console.log(" =================== Montos De Compra por Moneda ===============================")
  //     return MontosDeCompraPorMoneda
  } 

  // console.log(" =================== Montos De Compra por Moneda ===============================")
  // console.log( listaMonedasConMonto() ) 
  
 
  let cantidadesDineroPorMoneda = listaMonedasConMonto()
 
   
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$ Cantidades Dinero Moneda ARRAY STRINGIFEADO $$$$$$$$$$$$$$$$$$$$$$$")
  console.log(cantidadesDineroPorMoneda)

  
  const data = {
    series: [
      {
        // data:  [ listaMonedas.map( (moneda) => {return `${moneda.nombre} , `} )] 
        data: cantidadesDineroPorMoneda
      }
    ],
    options: {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories:  listaMonedas.map( (moneda) => {return `${moneda.nombre} , `} ) 
      }
    }
  }
  return (
    <div>
      
      <h4>Graficos de Compra Por Moneda (Total Actual en Pesos)</h4>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type='bar'
        height={210}
      />
    </div>
  )
}

export default Bar
