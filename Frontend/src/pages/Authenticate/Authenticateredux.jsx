import React from 'react';
import { useSelector } from 'react-redux';
import StephoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOTP from '../Steps/StepOTP/StepOTP';

const steps = { 1: StephoneEmail, 2: StepOTP };

const Authenticate = () => {
  const { step, phone, email } = useSelector((state) => state.auth);
  const Step = steps[step];


  return (
    <div>
<Step />
    </div>
  );
};


export default Authenticate;
