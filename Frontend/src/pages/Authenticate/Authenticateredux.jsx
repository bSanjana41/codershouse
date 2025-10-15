import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StephoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOTP from '../Steps/StepOTP/StepOTP';
import { nextStep } from '../redux/authSlice';

const steps = {
  1: StephoneEmail,
  2: StepOTP
};

const Authenticate = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.auth.step);
  const phone = useSelector(state => state.auth.phone);
  const email = useSelector(state => state.auth.email);

  const Step = steps[step];

  return (
    <div>
      <Step phone={phone} email={email} />
    </div>
  );
};

export default Authenticate;
