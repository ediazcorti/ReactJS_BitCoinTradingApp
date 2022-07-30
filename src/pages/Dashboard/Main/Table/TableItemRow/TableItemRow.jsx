import Button from '../../../../../components/UI/Button/Button';
const TableItemRow = ({ transaccion }) => {
  return (
    <tr>
      <th scope='row'>{transaccion.moneda}</th>
      <td>{
      
      
      transaccion.tipo_operacion == 1 ? "Compra" : "Venta"
      
      }</td>
      <td>{transaccion.cantidad}</td>
      <td>${transaccion.valor_actual}</td>
      {/* <td>
        <Button cta={"Delete"} classColor='btn-danger' />
      // </td> */}
    </tr>
  )
}

export default TableItemRow
