import React, { useState } from 'react'
import Phone from './Phone/Phone'
import Email from './Email/Email'
import styles from './StepPhoneEmail.module.css'
import MyEmoji from '../../../emojis/MyEmoji'

const phoneEmailMap = {
  phone: Phone,
  email: Email
}

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

    const handleNextFromChild = (value) => {
    onNext({ type, value }); 
  };

  return (
    <>

      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button className={`${styles.tabButton} ${type==="phone"?styles.active:""}`} onClick={() => setType("phone")}>
              <MyEmoji symbol="☎" label="phone2" />
            </button>

            <button className={`${styles.tabButton} ${type==="email"?styles.active:""}`} onClick={() => setType("email")}><MyEmoji symbol="✉︎" label="letter2" /></button>
          </div>
          <div>
          <Component  onNext={handleNextFromChild} />
       </div>
        </div>
      </div>
    </>
  )
}

export default StepPhoneEmail