import React from 'react'
import styles from './Hero.module.css'
import HeadphoneImage from '../../assets/vibrating-headphone.png'

function Hero() {
  return (
    <div className={styles.hero}>
            <div><p>100 Thousand Songs, ad-free</p><p>Over thousands podcast episodes</p></div>
            <div>
            <img src={HeadphoneImage} alt='headphone' width={212} />
            </div>
    </div>
  )
}

export default Hero