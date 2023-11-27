import React, { useState } from 'react'
import { CircularProgress } from '@mui/material'
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from "./Section.module.css"

function Section({title,data,type}) {
    console.log(title)
    const [carouselToggle,setCarouselToggle] = useState(false)
    const handleToggle = ()=>{
        setCarouselToggle((prevState)=>!prevState)
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText}
            onClick={handleToggle}>
            {!carouselToggle?"Collapse":"Show all"}
            </h4>
        </div>
        {
            data.length > 0 ? (
                <div className={styles.cardsWrapper}>
                    {
                        !carouselToggle ? (
                            <div className={styles.wrapper}>
                                {
                                    data.map((ele)=>(
                                        <Card data={ele} type={type} key={ele.id}/>
                                    ))
                                }
                            </div>
                        ):(
                            <Carousel data={data} renderComponent={(data)=><Card data={data} type={type} key={data.id}/>}/>
                        )
                    }
                </div>
            ):(<CircularProgress />)
        }
    </div>
  )
}

export default Section