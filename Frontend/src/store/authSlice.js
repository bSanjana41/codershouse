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
  }
});

export const { setPhone, setEmail, setOTP, nextStep } = authSlice.actions;
export default authSlice.reducer;
