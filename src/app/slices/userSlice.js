import { createSlice } from '@reduxjs/toolkit';
import { setToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../../utils/storage';

const initialState = {
    user: getFromLocalStorage("user")
    
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    setLoginUser: (state, action) => {

    const {payload}= action;
    state.user=payload;
    console.log("Me He Logeado desdde Store")
    console.log(state.user)
    // const payloadconvertido = payload.json.stringify()
    setToLocalStorage("user", payload)
    setToLocalStorage("id", payload)
     setToLocalStorage("apiKey", payload)
    // console.log("EL USUARIO EN LOCAL STORAGE ES::::::")

    // console.log(getFromLocalStorage("user"))
    console.log("EL APIKEY EN LOCAL STORAGE ES::::::")
    console.log(getFromLocalStorage("apiKey"))
    },

    setLogoutUser: (state) => {
      removeFromLocalStorage("apiKey")
      removeFromLocalStorage("id")
      removeFromLocalStorage("user")
       state.user = null;
      console.log("Se ha deslogeado desde store")

    }

  },
});

//esportar las acciones

export const {setLoginUser, setLogoutUser} = userSlice.actions;

export default userSlice.reducer
