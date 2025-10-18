import axios from "axios";

const api=axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials:true,
    headers: {
        "Content-Type": "application/json",
            }
});


//List of all endpoints

export const sendOtp = (data) => api.post('/send-otp', data);
export const verifyOtp = (data) => api.post('/verify-otp', data);
export const registerUser = (data) => api.post('/register', data);
export const loginUser = (data) => api.post('/login', data);
export const refreshToken = (data) => api.post('/refresh', data);
export default api;
