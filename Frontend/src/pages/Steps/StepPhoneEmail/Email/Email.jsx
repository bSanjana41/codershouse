import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import Textinput from '../../../../components/shared/Textinput/Textinput'
import StyleSheet from '../StepPhoneEmail.module.css'
import { nextStep,setEmail } from "../../../../store/authSlice.js"
import { useDispatch } from 'react-redux';


const Email = () => {
    const [localEmail, setLocalEmail] = useState("");
    const dispatch = useDispatch()

    const submitHandler = async () => {

        const res = await sendOtp({ email: localEmail });
        dispatch(setEmail(localEmail))
        dispatch(nextStep())
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <Card title="Enter your Email-Id" icon="✉️" label="email">
                <div className={StyleSheet.inputWrap}>
                    <Textinput placeholder="Enter your email-id" value={localEmail} onChange={(e) => handleChange(e)} type="email" />
                </div>

                <div className={StyleSheet.actionButtonWrap}>
                    <Button onClick={submitHandler} title="Next" />
                </div>


                <div>

                </div>
            </Card>    </>
    )
}

export default Email