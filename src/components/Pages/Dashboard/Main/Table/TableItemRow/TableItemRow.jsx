import Button from '../../../../../UI/Button/Button';
import coinSlice from '../../../../../../app/slices/coinSlice';
import { useSelector } from 'react-redux';
const TableItemRow = ({ transaction }) => {
  const monedas = useSelector ((state) => state.coin)  


const EncontrarMoneda = () => { 
  const monedaEncontrada = monedas.listaMonedas.find(obj => {
    return obj.id === transaction.moneda;
  });
  return monedaEncontrada.nombre 
 

}

  


  return (
    <tr>
      <th scope='row'>{
    EncontrarMoneda()
    }</th>
      <td>{  transaction.tipo_operacion == 1 ? "Compra" : "Venta"}</td>
      <td>{transaction.cantidad}</td>
      <td>${transaction.valor_actual}</td>
    </tr>
  )
}

export default TableItemRow
