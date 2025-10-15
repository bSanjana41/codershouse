import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Textinput from '../../../components/shared/Textinput/Textinput';
import Button from '../../../components/shared/Button/Button';
import styles from './StepOTP.module.css'
import { verifyOtp } from '../../../http';

const StepOTP = ({ phone,email,onNext }) => {
    const [OTP, setOTP] = useState("");

      const  submitHandler = async() => {
        const res= await verifyOtp({phone:`+91${phone}`,otp:OTP})
        onNext();
      }
    
    const handleOTPChange = (e) => {
        setOTP(e.target.value);
    }
    return (
        <>
            <div className={styles.cardWrapper}>
                <Card title="Enter the OTP" icon="🔑" label="otp">
                    <div className={styles.inputWrap}>
                        <Textinput placeholder="Enter OTP" type="number" maxLength={4}
                            value={OTP}
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