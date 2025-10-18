import React, { useState } from 'react'
import StepName from "../Steps/StepName/StepName.jsx"
import StepAvatar from "../Steps/StepAvatar/StepAvatar.jsx"
import {useSelector} from "react-redux"
const steps = {
  1: StepName,
  2: StepAvatar
}
const Activate = () => {
  const { step } = useSelector((state) => state.activate);

  const Step = steps[step]


  return (
    <div>
      <Step />

    </div>
  )
}

export default Activate