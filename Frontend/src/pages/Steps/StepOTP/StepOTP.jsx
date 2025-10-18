import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Textinput from '../../../components/shared/Textinput/Textinput';
import Button from '../../../components/shared/Button/Button';
import styles from './StepOTP.module.css'
import { verifyOtp } from '../../../http';
import { nextStep, setOTP ,setAuth} from "../../../store/authSlice.js"
import { useDispatch,useSelector } from 'react-redux';


const StepOTP = () => {
    const [otpInput, setOtpInput] = useState("");
    const dispatch = useDispatch()
    const { phone, email ,isAuth} = useSelector((state) => state.auth);


    const submitHandler = async () => {
        try {
            const payload = phone ? { phone, otp: otpInput } : { email, otp: otpInput };
            const {data}=await verifyOtp(payload)
            dispatch(setOTP(otpInput));
            dispatch(setAuth({user:data.user}))
            // dispatch(nextStep())
        } catch (err) {
                console.error("❌ Error verifying OTP:", err.response?.data || err.message);

        }
    }

    const handleOTPChange = (e) => {
        setOtpInput(e.target.value);
    }
    return (
        <>
            <div className={styles.cardWrapper}>
                <Card title="Enter the OTP" icon="🔑" label="otp">
                    <div className={styles.inputWrap}>
                        <Textinput placeholder="Enter OTP" type="number" maxLength={4}
                            value={otpInput}
                            onChange={(e) => { handleOTPChange(e) }} />
                    </div>
                    <div className={styles.actionButtonWrap}>
                        <Button title="Next" onClick={submitHandler} />
                    </div>
                </Card>
            </div>
        </>

    )
}

export default StepOTP