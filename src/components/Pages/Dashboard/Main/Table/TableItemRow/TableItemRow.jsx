import Button from '../../../../../UI/Button/Button';
const TableItemRow = ({ transaction }) => {
  return (
    <tr>
      <th scope='row'>{transaction.moneda}</th>
      <td>{  transaction.tipo_operacion == 1 ? "Compra" : "Venta"}</td>
      <td>{transaction.cantidad}</td>
      <td>${transaction.valor_actual}</td>
    </tr>
  )
}

export default TableItemRow
