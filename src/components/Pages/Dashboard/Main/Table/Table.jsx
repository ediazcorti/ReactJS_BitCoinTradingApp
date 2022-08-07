import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTransacciones} from '../../../../../app/slices/transactionSlice';
import { ObtenerTransacciones } from '../../../../../Services/ServiceAsync';
import "./Table.css"
import TableItemRow from './TableItemRow'
import { setLogoutUser } from '../../../../../app/slices/userSlice';
import coinSlice from '../../../../../app/slices/coinSlice';



const Table = ({obtenerMonedas}) => {


  
  
  const dispatch = useDispatch()
  const monedas = useSelector ((state) => state.coin)
  const transactions = useSelector(state => state.transactions.transactions)
  const user = useSelector(state => state.user.user)
  
  const encontrarMoneda  = (transaction) => { 
  

    if (1+2 == 3){
      
      console.log("LISTA DE MONEDAS UNDEFINED??? ????? ", monedas.listaMonedas)
      const moneda = monedas.listaMonedas.find(obj => {
        return obj.id === transaction.moneda;
      });
      return moneda.nombre
  
    }}


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
  }, [transactions])
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
          <TableItemRow transaction={transaction} encontrarMoneda={encontrarMoneda}  monedas={monedas.listaMonedas} obtenerMonedas={obtenerMonedas} />
        ))}
      </tbody>
    </table>
  )
}

export default Table