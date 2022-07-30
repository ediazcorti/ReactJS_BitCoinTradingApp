import { configureStore } from '@reduxjs/toolkit'
import coinReducer from '../app/slices/coinSlice'
import userReducer from '../app/slices/userSlice'
import transactionReducer from '../app/slices/transactionSlice'

export const store = configureStore (
{ 
reducer: {
    user : userReducer,
    coins : coinReducer,
    transactions : transactionReducer,

},
})