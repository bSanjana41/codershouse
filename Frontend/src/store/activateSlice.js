import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  username:"",
  avatar: "",
  isAuth: false

};

const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    setUsername: (state, action) => { state.username = action.payload },
    nextStep: (state) => { state.step += 1 },
    setAvatar:(state,action)=>{state.avatar=action.payload},
    resetAuth: (state) => {
      state.step = 1;
      state.username = "";
      state.isAuth = false
      state.avatar=""
    },
  }
});

export const { setUsername, setAvatar, nextStep,resetAuth} = activateSlice.actions;
export default activateSlice.reducer;
