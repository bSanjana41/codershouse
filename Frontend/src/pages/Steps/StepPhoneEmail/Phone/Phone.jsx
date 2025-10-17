import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import MyEmoji from '../../../../emojis/MyEmoji.jsx'
import Textinput from '../../../../components/shared/Textinput/Textinput'
import StyleSheet from '../StepPhoneEmail.module.css'
import { sendOtp } from '../../../../http/index.js'
import { nextStep, setPhone } from "../../../../store/authSlice.js"
import { useDispatch } from 'react-redux'

const Phone = () => {

  const [localPhone, setLocalPhone] = useState("");
  const [error, setError] = useState("")
  const dispatch = useDispatch()


  const submitHandler = async () => {
    const fullPhone = `+91${localPhone}`;
    if (!localPhone.trim()) {
      setError("Please enter your phone number");
      return;
    }

    const res = await sendOtp({ phone: fullPhone });
    dispatch(setPhone(fullPhone))
    dispatch(nextStep())
  }

  const handleChange = (e) => {
    setLocalPhone(e.target.value);
  }

  return (
    <>
      <Card title="Enter your Phone Number" icon="📞" label="phone">
        <div className={StyleSheet.inputWrap}>
          <Textinput placeholder="Enter your phone number" maxLength={10} value={localPhone} onChange={(e) => handleChange(e)} type="tel" />
        </div>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <div className={StyleSheet.actionButtonWrap}>
          <Button title="Next" onClick={submitHandler} />
        </div>

        <div>

        </div>
      </Card>    </>
  )
}

export default Phone