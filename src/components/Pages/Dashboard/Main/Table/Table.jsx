import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTransacciones} from '../../../../../app/slices/transactionSlice';
import { ObtenerTransacciones } from '../../../../../Services/ServiceAsync';
import "./Table.css"
import TableItemRow from './TableItemRow'
import { setLogoutUser } from '../../../../../app/slices/userSlice';

const Table = () => {
  const dispatch = useDispatch()
  const transactions = useSelector(state => state.transactions.transactions)
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    try {
      ;(async () => {
        const response = await ObtenerTransacciones(user.id)
        dispatch(setTransacciones(response.transacciones))
      })()
    } catch (error) {
      dispatch(setLogoutUser())
      console.error(error)
    }
  }, [])
  console.log(transactions);
  return (
  
    <table className='table table-info'  >
      <thead>
        <tr>
          <th scope='col'>Moneda</th>
          <th scope='col'>Tipo de Operación</th>
          <th scope='col'>Cantidad</th>
          <th scope='col'>Valor en UYU</th>
        </tr>
      </thead>
      <tbody>
        
      {transactions.map(transaction => (
          <TableItemRow transaction={transaction}  />
        ))}
      </tbody>
    </table>
  )
}
export default Table