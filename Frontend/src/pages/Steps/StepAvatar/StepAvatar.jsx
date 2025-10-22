import React, { useState, useEffect } from 'react'
import Avatar from 'react-nice-avatar'

import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar, setGender, nextStep } from '../../../store/activateSlice'
import getAvatar from '../../../components/shared/Avatar/Avatar.jsx'
import styles from '../StepAvatar/StepAvatar.module.css'

const StepAvatar = () => {
  const { username, gender } = useSelector((state) => state.activate)
  const [avatarConfig, setAvatarConfig] = useState(null)
  const [selectedGender, setSelectedGender] = useState(gender || '')
  const dispatch = useDispatch()

  // Generate avatar when username or gender changes
  useEffect(() => {
    if (username && selectedGender) {
      const config = getAvatar(username, selectedGender)
      setAvatarConfig(config)
      dispatch(setAvatar(config))
      dispatch(setGender(selectedGender))
    }
  }, [username, selectedGender])

  // Generate a new random avatar
  const generateRandomAvatar = () => {
    if (!username || !selectedGender) return
    const randomNum = Math.floor(Math.random() * 1000);
    const newAvatar = getAvatar(username, selectedGender, randomNum);

    setAvatarConfig(newAvatar)
    dispatch(setAvatar(newAvatar))
  }

  const submitHandler = () => {
    if (!avatarConfig) return
    dispatch(nextStep())
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Hi! Choose your avatar" icon="🧑‍🎨">

        {/* Avatar Preview */}
        <div className={styles.inputWrap}>
          {avatarConfig ? (
            <div className={styles.avatarBorder}>
              <Avatar style={{ width: 100, height: 100 }} {...avatarConfig} />
            </div>
          ) : (
            <p className={styles.placeholderText}>Select your gender to see an avatar</p>
          )}
        </div>

        {/* Gender Input */}
        <div className={styles.inputWrap}>
          <label className={styles.label}>Gender:
            <select id='gender'
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className={styles.genderSelect}
            >
              <option value="">Select</option>
              <option value="male">Male 👨</option>
              <option value="female">Female 👩</option>
            </select></label>

        </div>

        {/* Try another avatar */}
        {avatarConfig && (
          <Button className={styles.skipText} title="🔄 Try another avatar"
            onClick={generateRandomAvatar}>
          </Button>
        )}
        <div><input id='avatarInput' type='file' className={styles.avatarInput} />
          <label htmlFor='avatarInput'>Upload your avatar</label>
        </div>
        {/* Next Button */}
        <div className={styles.actionButtonWrap}>
          <Button title="Next" onClick={submitHandler} />
        </div>
      </Card>
    </div>
  )
}

export default StepAvatar
