import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import Textinput from '../../../../components/shared/Textinput/Textinput'
import StyleSheet from '../StepPhoneEmail.module.css'

const Email = ({onNext}) => {
    const [email, setEmail] = useState("");
    
  const  submitHandler = async() => {

    const res= await sendOtp({email: email});
    onNext(email);
  }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <Card title="Enter your Email-Id" icon="✉️" label="email">
                <div className={StyleSheet.inputWrap}>
                    <Textinput placeholder="Enter your email-id" value={email} onChange={(e) => handleChange(e)} type="email" />
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