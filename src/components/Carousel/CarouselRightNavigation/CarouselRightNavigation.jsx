import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./CarouselRightNavigation.module.css"
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg'

function CarouselRightNavigation() {
    const swiper = useSwiper()
    const [isEnd,setIsEnd] = useState(swiper.isEnd)
    useEffect(()=>{
        swiper.on("slideChange",()=>{
            setIsEnd(swiper.isEnd)
        })
    },[])
  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} />}
    </div>
  )
}

export default CarouselRightNavigation