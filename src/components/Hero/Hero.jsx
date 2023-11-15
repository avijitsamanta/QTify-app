import React from 'react'
import styles from './Hero.module.css'
import HeadphoneImage from '../../assets/vibrating-headphone.png'

function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_content_wrapper}>
            <div className={styles.text_div}><div>100 Thousand Songs,ad-free</div><div>Over thousands podcast episodes</div></div>
            <img src={HeadphoneImage} alt='headphone' width={212} height={212}/>
        </div>
    </div>
  )
}

export default Hero