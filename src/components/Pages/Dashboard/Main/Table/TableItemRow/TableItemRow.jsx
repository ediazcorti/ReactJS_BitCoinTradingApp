import Button from '../../../../../UI/Button/Button';
import { ObtenerTransacciones, getCoins } from '../../../../../../Services/ServiceAsync'
import coinSlice from '../../../../../../app/slices/coinSlice';
import { getMonedasActual } from '../../../../../../app/slices/coinSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getFromLocalStorage } from '../../../../../../utils/storage';
import { useEffect } from 'react';



const TableItemRow = ({ transaction, monedas, obtenerMonedas, encontrarMoneda }) => {
  const usuario = useSelector((state) => state.user)
  const transacciones = useSelector((state) => state.transactions.transactions);
  const coin = useSelector((state) => state.coin)
  const dispatch = useDispatch()
  const objeto = getFromLocalStorage("apiKey")
  const listaDeMonedas = coin.listaMonedas
  const arrayMonedasIds = listaDeMonedas.map((moneda) => { return moneda.id })

  // useEffect(() => {  
  //   obtenerMonedas(objeto)    
  //    ObtenerTransacciones()    
  //       },[transaction])

  // const encontrarMoneda  = () => { 


  //   if (1+2 == 3){

  //     console.log("LISTA DE MONEDAS UNDEFINED??? ????? ", coin.listaMonedas)
  //     const moneda = monedas.find(obj => {
  //       return obj.id === transaction.moneda;
  //     });
  //     return moneda.nombre

  //   }

  // ESTO ESTA HARDCODEADO PORQUE SI LE PONEMOS LA FUNCION DE ARRIBA CON FIND Moneda.NOMBRE SIEMPRE SALE UNDEFINED LUEGO DE CREAR UNA NUEVA TRANSACTION
  const nombrarMoneda = (id) => {
   switch (id) {
    case 1:
      return 'Vintereum';
    case 2:
      return 'Pesocoin';
    case 3:
      return 'Monereum';
    case 4:
      return 'Finance URU';
    case 5:
      return 'MvdCoin';
    case 6:
      return 'Hexagon';
    case 7:
      return 'Guitchain';
    case 8:
      return 'Money Token';
      case 9:
      return 'MGD';
    default:
      return 'fail';
  }
}


  return (

    <tr>
      {<th scope='row'>{nombrarMoneda(transaction.moneda)
      }</th>}
      {/* <td>{ () => {  monedas.listaMonedas.find(obj => {
     obj.id === transaction.moneda;
})}}</td> */}
      <td>{transaction.tipo_operacion == 1 ? "Compra" : "Venta"}</td>
      <td>{transaction.cantidad}</td>
      <td>${transaction.valor_actual}</td>
    </tr>
  )

}


export default TableItemRow
