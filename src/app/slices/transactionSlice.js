import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions : [],
    montoCompras: 0,
    montoVentas: 0,
    montoTotal: 0,
    compras : [],
    ventas : [],
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    // Actions
    
    //#region 1. ListarTransacciones 
    setTransacciones: (state, action) => {
        const { payload } = action;
        state.transactions = payload;
        state.compras = payload.filter((transaction) => transaction.tipo_operacion == 1);
        state.ventas = payload.filter((transaction) => transaction.tipo_operacion != 1);   
      },


    //#endregion

     //#region 2. Registrar Nueva Transaccion
      addNewTransaction: (state, action) => {
        const { payload } = action;
         state.transactions = [...state.transactions, payload];
         state.compras = payload.filter((transaction) => transaction.tipo_operacion == 1);
         state.ventas = payload.filter((transaction) => transaction.tipo_operacion != 1);  
      },
     
    //#endregion

    //#region 3. Calcular Montos de Compra; Venta; y Total
    listarMontoCompras: (state, action) => {
        const { payload } = action;
        state.compras = payload.filter((transaction) => transaction.tipo_operacion == 1);
        state.ventas = payload.filter((transaction) => transaction.tipo_operacion != 1);   
        // State actual de compra + un recorrido de cada compra y se le suma su monto

        // CAMBIAR ESTO POR REDUCE
        state.montoCompras = state.compras.reduce((acumulado, compraActual) => acumulado+(compraActual.cantidad * compraActual.valor_actual));
       // (compra) =>  state.montoCompras = state.montoCompras + (compra.cantidad * compra.valor_actual)

        // Lo mismo pero con ventas
        state.montoVentas = state.ventas.reduce((acumulado, ventaActual) => acumulado+(ventaActual.cantidad * ventaActual.valor_actual));

        // Resta las compras totales de las ventas           
        state.montoTotal = state.montoCompras - state.montoVentas;  
      }
       
    }});

export const { setTransacciones, addNewTransaction, listarMontoCompras } = transactionSlice.actions;
export default transactionSlice.reducer;