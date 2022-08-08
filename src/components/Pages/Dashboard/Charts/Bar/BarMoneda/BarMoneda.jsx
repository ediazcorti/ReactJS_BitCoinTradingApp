import ReactApexChart from 'react-apexcharts'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getFromLocalStorage } from '../../../../../../utils/storage';
import { getCoins } from '../../../../../../Services/ServiceAsync';
import { setMonedas } from '../../../../../../app/slices/coinSlice';
import { setLoginUser, setLogoutUser } from '../../../../../../app/slices/userSlice';
import {setTransacciones} from '../../../../../../app/slices/transactionSlice'
import { useState } from 'react';


const BarMoneda = ( {ObtenerTransacciones} ) => {
  const [monedaSLC, setmonedaSLC] = useState("None")
  let eValue = 0
  const getValue = (e) => {
    eValue = e.target.value
    setmonedaSLC(eValue)
    setAllM(monedas.listaMonedas.filter(moneda => moneda.id == eValue))
  }
  const transactions = useSelector ((state) => state.transactions.transactions);
  const user = useSelector((state) => state.user)
  const monedas = useSelector ((state) => state.coin)
  const transacciones = useSelector((state) => state.transactions.transactions);
  let listaTransacciones = []
  const listaMonedas = monedas.listaMonedas
  let monedaElegida = {id: 1}
  const inputSlcMoneda = useRef()
  let listaTransaccActual = "Vacio"

  const [allM, setAllM] = useState("None")
  

  const [listaTransacMoneda, setListaTransacMoneda] = useState("None")
 const [listaValorTransac, setListaValorTransac] = useState("None")

  //  const monedaElegidaSlc  =  allM
 
  
  // const monedaEncontrada = listaMonedas.find(obj => {
  //   return obj.id == monedaElegidaSlc;
  // });

  const monedaElegidaNumber = Number(allM)

  const objeto = getFromLocalStorage("apiKey")

  
  
  const dispatch = useDispatch()


 

  

  const [monedas1, setMonedas1] = useState([0]);



  const listarMonedas = (a) =>  {

    setMonedas1(a)

    }


    const listarM = (a) =>  {

      setAllM(a)
  
      }

  const LlenarMonedas = () => {          
    listarMonedas(obtenerMonedas(objeto))
    
  }

  // useEffect(() => {
  //   LlenarMonedas();
    
  // }, []);

  const secondFunction = async () => {
    const result = await LlenarMonedas()
    // do something else here after firstFunction completes
  }


  useEffect(() => {

   LlenarMonedas()
      
    
    if (monedaSLC != "None")  { 
      
     
       console.log("VALUE DE MONEDAS ES")
       console.log(allM)  
      //     console.log(monedas1[0])
          transacciones.filter((transaction) => transaction.moneda == allM[0].id ? listaTransacciones.push(transaction ) : null);
          console.log("LA LISTA DE TRANSACCIONES PARA", allM[0].nombre, "ES LA SIGUIENTE: ", listaTransacciones)
          console.log("EL MAPEO ME RETORNA LO SIGUIENTE:")
          console.log(listaTransacciones.map((transaction) => {return  `'${transaction.id}' `    } ))
          const listaTransaccActual = listaTransacciones.map((transaction) => {return (transaction.id)    } )
          const listaValorTransac = listaTransacciones.map((transaction) => {return (transaction.valor_actual)    } )
          // let StringCategorias = []
          // const llenarStringCategorias = () => {  for (let i = 0; i <= listaTransaccActual.length; i++) {
          //  let valorAPushear = 
          //   ""  + `${listaTransaccActual[i]}` + ""
          //   // if  (i < listaTransaccActual.length)  { 
          //   //   valorAPushear+= ", "
          //   // } 
          //   StringCategorias.push(valorAPushear)          
          // }}
          // llenarStringCategorias()
          let [...rest] = listaTransaccActual
          
          // console.log("EL STRING DE CATEGORIAS ES",  StringCategorias)
          setListaTransacMoneda([...rest]);
          let [...ola] = listaValorTransac
          setListaValorTransac([...ola])
          console.log("LA LISTA DE TRANSAC DE MONEDA ES", listaTransacMoneda)
          // setListaTransacMoneda(listaTransacciones.map((transaction) => {return `${transaction.id} , `    } ))
    }
   
  }, [monedaSLC]);


  const obtenerMonedas = (objeto) => {
    getCoins(objeto.apiKey)
    .then((response) => response.json())
    .then((result) =>   { 
    
    const arrayMonedas = result.monedas
    console.log("array de monedas updated es")
    console.log(arrayMonedas)
    dispatch(setMonedas(arrayMonedas))
    console.log("Dispatch de monedas resultado:") 
console.log(arrayMonedas) 
return arrayMonedas})
      


}


 useEffect(() => {

  //     getCoins(usuario.user.apiKey)
  //    .then((response) => response.json())
  //    .then((result) => dispatch(setMonedas(result.monedas) )) 
  console.log("APIKEY DE LA STORAGE DESDE MAIN ES = ")
  console.log(objeto.apiKey)
  obtenerMonedas(objeto)
  console.log("Las monedas ahora son")
  console.log(monedas.listaMonedas)
   ObtenerTransacciones(user.id)
  
      },[transacciones])


  // useEffect(() => {
  //   try {
  //     ;(async () => {
  //       const response = await ObtenerTransacciones(user.id)
  //       dispatch(setTransacciones(response.transacciones))

        

        
  //     })()
  //   } catch (error) {
  //     dispatch(setLogoutUser())
  //     console.error(error)
  //   }
  // }, [])


  
  
  // transacciones.filter((transaction) => transaction.moneda == monedaElegidaNumber ? listaTransacciones.push(transaction) : null)


  
  const data = {
    series: [
      {
        // data:  [ listaMonedas.map( (moneda) => {return `${moneda.nombre} , `} )] 
        data:  [ ...listaValorTransac  ] 


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
        //  categories:   listaMonedas.map( (moneda) => {return `${moneda.nombre} , `} ) 
        // categories:   listaTransacciones.map((transaction) => {return `${transaction.id} , `    } )
           categories :  [  ...listaTransacMoneda ]
        
        //  categories : [ 'Hola', "Como", "Estas" ]
      }
    }
  }
  return (
    <div>
      
      <h4>Graficos de valor de la Moneda Elegida para cada transacción (Total Actual en Pesos)</h4>
      <label htmlFor="SelectMonedas">Seleccione su moneda</label><br />
          <select className="form-control" name="slcMoneda" id="slcmoneda" ref={inputSlcMoneda} onChange={getValue} value="None" >
           <option value="None" disabled>Seleccione una moneda</option>
          { monedas.listaMonedas ? 
            monedas.listaMonedas.map(
                    (moneda) => {
                        return (
                          <option key={moneda.id} value={moneda.id} >
                  Nombre Moneda: {moneda.nombre} <br />
                  ID: {moneda.id}
                </option>
                          
                        );
                      }) : null
                                   }


          </select>
          <h4>Resultados para la moneda elegida <br />
              { allM[0].nombre} 
             
             </h4>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type='bar'
        height={210}
      />
    </div>
  )
}

export default BarMoneda
