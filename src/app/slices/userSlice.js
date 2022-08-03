import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
    
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    setLoginUser: (state, action) => {

    const {payload}= action;
    state.user=payload;

    },

    setLogoutUser: (state) => {

      state.user = null;

    }

  },
});

//esportar las acciones

export const {setLoginUser, setLogoutUser} = userSlice.actions;

export default userSlice.reducer
