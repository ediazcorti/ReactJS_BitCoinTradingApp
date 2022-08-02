import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
    
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Actions
    setLoginUser: (state, action) => {
      if (state.user != null) { 
      const { payload } = action;
      state.user = payload;
    }
      // state.user.apiKey = payload.apiKey;
      },
      setLogoutUser: (state) => {
      state.user = null
      },  
    getUser: (state) => { 
       return state.user
    },
  },
});

export const { setLoginUser, setLogoutUser, getUser } = userSlice.actions;
export default userSlice.reducer;