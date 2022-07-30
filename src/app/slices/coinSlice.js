import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   listaMonedas :[] 
};

export const userSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    // Actions
    
    //#region 1. ListarMonedas
    listarMonedas: (state, action) => {
        const { payload } = action;
        state.listaMonedas = payload;       
      },
    //#endregion
    
  },
});

export const { listarMonedas } = coinSlice.actions;
export default coinSlice.reducer;







// ListarMonedas