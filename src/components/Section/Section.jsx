import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from "./Section.module.css"
import Filters from '../Filters/Filters';

function Section({title,data,filterSource,type}) {
    const [filters,setFilters] = useState([{key:"all",label:"All"}])
    const [selectedFilterIndex,setSelectedFilterIndex] = useState(0)
    const [carouselToggle,setCarouselToggle] = useState(true)
    const handleToggle = ()=>{
        setCarouselToggle((prevState)=>!prevState)
    }

    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const {data} = response
                setFilters([...filters,...data]);
            });
        }
    },[])

    const showFilters = filters.length > 1

    const cardsToRender = data.filter((card)=>(
        showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key:card
     ))
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
           
            {!showFilters && <h4 className={styles.toggleText}
            onClick={handleToggle}>
            {!carouselToggle?"Collapse":"Show all"}
            </h4>} 
            
        </div>
        {showFilters &&
                  <div className={styles.filterWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                  </div>
        }
        {
            data.length > 0 ? (
                <div className={styles.cardsWrapper}>
                    {
                        !carouselToggle ? (
                            <div className={styles.wrapper}>
                                {
                                    cardsToRender.map((ele)=>(
                                        <Card data={ele} type={type} key={ele.id}/>
                                    ))
                                }
                            </div>
                        ):(
                            <Carousel data={cardsToRender} renderComponent={(data)=><Card data={data} type={type} key={data.id}/>}/>
                        )
                    }
                </div>
            ):(<CircularProgress />)
        }
    </div>
  )
}

export default Section