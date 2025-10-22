import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  username:"",
  avatar: "",
  gender:"",
  isAuth: false

};

const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    setUsername: (state, action) => { state.username = action.payload },
    nextStep: (state) => { state.step += 1 },
    setAvatar:(state,action)=>{state.avatar=action.payload},
    setGender:(state,action)=>{state.gender=action.payload},
    resetAuth: (state) => {
      state.step = 1;
      state.username = "";
      state.isAuth = false
      state.avatar=""
      state.gender=""
    },
  }
});

export const { setUsername, setAvatar,setGender, nextStep,resetAuth} = activateSlice.actions;
export default activateSlice.reducer;

