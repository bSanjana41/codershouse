import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  user:null,
  phone: "",
  email: "",
  otp: "",
  isAuth: false

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPhone: (state, action) => { state.phone = action.payload },
    setEmail: (state, action) => { state.email = action.payload },
    setOTP: (state, action) => { state.otp = action.payload },
    nextStep: (state) => { state.step += 1 },
    resetAuth: (state) => {
      state.step = 1;
      state.phone = "";
      state.email = "";
      state.otp = "";
      state.isAuth = false
    },
    setAuth:(state,action)=>{
const {user}=action.payload;
state.user=user;
state.isAuth=true
    }
  }
});

export const { setPhone, setEmail, setOTP, nextStep, resetAuth ,setAuth} = authSlice.actions;
export default authSlice.reducer;
