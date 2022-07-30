import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions : [],
    montoCompras: 0,
    montoVentas:  0,
    montoTotal: 0,
    compras : [],
    ventas : [],
};

export const userSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    // Actions
    
    //#region 1. ListarTransacciones 
    setTransacciones: (state, action) => {
        const { payload } = action;
        state.transactions = payload;
        state.compras = state.transactions.filter((transaction) => payload.tipo_operacion == 1);
        state.ventas = state.transactions.filter((transaction) => payload.tipo_operacion != 1);   
      },


    //#endregion

     //#region 2. Registrar Nueva Transaccion
     addNewTransaction: (state, action) => {
        const { payload } = action;
        state.transactions = [...state.transactions, payload];
        state.compras = state.transactions.filter((transaction) => payload.tipo_operacion == 1);
        state.ventas = state.transactions.filter((transaction) => payload.tipo_operacion != 1);
        // tipo_operacion
        // state.compras = [...state.transactions, payload];
      },
    //#endregion

    //#region 3. Calcular Montos de Compra; Venta; y Total
    listarMontoCompras: (state, action) => {
        const { payload } = action;
        state.compras = state.transactions.filter((transaction) => payload.tipo_operacion == 1);
        state.ventas = state.transactions.filter((transaction) => payload.tipo_operacion != 1);   
        state.montoCompras = state.compras.map((compra) =>  montoCompras+= (compra.cantidad * compra.valor_actual));      
        state.montoVentas = state.ventas.map((venta) =>  montoVentas+= (venta.cantidad * venta.valor_actual));      
        state.montoTotal = state.montoCompras - state.montoVentas;       
      },

   

    //#endregion



    
  },
});

export const { setTransacciones, addNewTransaction, listarMontoCompras } = transactionSlice.actions;
export default transactionSlice.reducer;