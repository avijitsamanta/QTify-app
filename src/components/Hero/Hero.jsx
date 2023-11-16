import React from 'react'
import styles from './Hero.module.css'
import HeadphoneImage from '../../assets/vibrating-headphone.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <p>100 Thousand Songs,ad-free</p>
        <p>Over thousands podcast episodes</p>
        <img src={HeadphoneImage} alt='headphone' width={212} height={212}/>
    </div>
  )
}

export default Hero