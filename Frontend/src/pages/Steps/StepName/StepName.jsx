import React from 'react'
import { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import Textinput from '../../../components/shared/Textinput/Textinput'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername,nextStep } from '../../../store/activateSlice'
import styles from '../StepName/StepName.module.css'

const StepName = () => {
  const { username } = useSelector((state) => state.activate)
  const [userNameInput, setUserNameInput] = useState(username)
  const dispatch = useDispatch()

  const handleNameChange = (e) => {
    setUserNameInput(e.target.value)
  }
  const submitHandler = () => {
    if (!userNameInput) return
    dispatch(setUsername(userNameInput))
        dispatch(nextStep())

  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter your full name" icon="🧑" label="fullname">
          <div className={styles.inputWrap}>
            <Textinput placeholder="Enter name" type="text" maxLength={10}
              value={userNameInput}
              onChange={(e) => { handleNameChange(e) }} />
          </div>
          <div className={styles.actionButtonWrap}>
            <Button title="Next" onClick={submitHandler} />
          </div>
        </Card>
      </div>
    </>
  )
}

export default StepName