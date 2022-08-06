import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   listaMonedas : [] 
};

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    // Actions
    
    //#region 1. ListarMonedas
    setMonedas: (state, action) => {
        const { payload } = action;
        
       // state.coin.listaMonedas = payload
         state.listaMonedas = payload  
      },
    //#endregion
    
  },
});

export const { setMonedas } = coinSlice.actions;
export default coinSlice.reducer;







// ListarMonedas