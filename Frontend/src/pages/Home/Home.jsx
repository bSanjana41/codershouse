import React from 'react'
import styles from './Home.module.css'
import MyEmoji from '../../emojis/MyEmoji'
import { Link } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetAuth } from '../../store/authSlice'


const Home = () => {
  
  const navigate = useNavigate();
const dispatch=useDispatch()
  
  const startRegister = () => {
dispatch(resetAuth())
    navigate("/authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse " icon="🏠" label="home">

        <p className={styles.text}>
          Your one-stop platform for all coding resources, tutorials, and community support. Whether you're a beginner or an experienced developer, Codershouse has something for everyone. Dive in and start your coding journey with us today!
        </p>
        <div>
          <Button title="Lets go" onClick={startRegister}/>
        </div>
        <div>
          <span>
            Already a member?
          </span>
        </div>
      </Card>
    </div>
  )
}

export default Home