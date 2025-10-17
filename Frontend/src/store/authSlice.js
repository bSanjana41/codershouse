import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  phone: "",
  email: "",
  otp: "",
  isAuthenticated: false
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
      state.isAuthenticated = false
    }
  }
});

export const { setPhone, setEmail, setOTP, nextStep, resetAuth } = authSlice.actions;
export default authSlice.reducer;
