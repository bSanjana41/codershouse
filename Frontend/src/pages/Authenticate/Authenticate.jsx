import React, { useState } from 'react'
import StephoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTP from '../Steps/StepOTP/StepOTP'

const steps = {
    1: StephoneEmail,
    2: StepOTP

}
const Authenticate = ({ type, value }) => {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const handleNextFromPhoneEmail = ({ type, value }) => {
        if (type === "phone") setPhone(value);
        if (type === "email") setEmail(value);
        setStep(prev => prev + 1);
    };

    const Step = steps[step];
    return (
        <div>
            {step === 1 && <Step onNext={handleNextFromPhoneEmail} />}
            {step === 2 && <Step onNext={() => setStep(prev => prev + 1)} phone={phone} email={email}/>}
            {/* //Step is component so it will come inside </> */}
        </div>
    )
}

export default Authenticate