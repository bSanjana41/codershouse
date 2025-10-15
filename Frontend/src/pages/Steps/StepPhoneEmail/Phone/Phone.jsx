import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import MyEmoji from '../../../../emojis/MyEmoji'
import Textinput from '../../../../components/shared/Textinput/Textinput'
import StyleSheet from '../StepPhoneEmail.module.css'
import { sendOtp } from '../../../../http/index.js'

const Phone = ({onNext}) => {

  const [phone, setPhone] = useState("");

  const  submitHandler = async() => {

    const res= await sendOtp({phone: `+91${phone}`});
    onNext(phone);
  }

  const handleChange = (e) => {
    setPhone(e.target.value);
  }

  return (
    <>
      <Card title="Enter your Phone Number" icon="📞" label="phone">
        <div className={StyleSheet.inputWrap}>
        <Textinput placeholder="Enter your phone number" maxLength={10} value={phone} onChange={(e) => handleChange(e)} type="tel" />
        </div>
        <div className={StyleSheet.actionButtonWrap}>
          <Button title="Next" onClick={submitHandler} />
        </div>

        <div>

        </div>
      </Card>    </>
  )
}

export default Phone