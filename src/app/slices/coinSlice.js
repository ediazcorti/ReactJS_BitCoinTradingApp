import { createSlice } from '@reduxjs/toolkit';
import { setToLocalStorage, getFromLocalStorage } from '../../utils/storage';

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
         setToLocalStorage("listaMonedas", payload)
      },

      getMonedasActual: (state) => { 
        state.listaMonedas = getFromLocalStorage("listaMonedas")
        
      }
    //#endregion
    
  },
});

export const { setMonedas, getMonedasActual } = coinSlice.actions;
export default coinSlice.reducer;







// ListarMonedas