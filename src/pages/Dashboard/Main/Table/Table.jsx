import TableItemRow from './TableItemRow'

const Table = ({ transacciones }) => {
  console.log(transacciones)
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Moneda</th>
          <th scope='col'>Tipo de operacion</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Valor de la moneda</th>
        </tr>
      </thead>
      <tbody>
        {transacciones.map(transaccion => (
          <TableItemRow transaccion={transaccion} />
        ))}
      </tbody>
    </table>
  )
}
export default Table
