import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {
    Tooltip,
    Chip
  } from "@mui/material";

function Card({data,type}) {
  const getCard = (type) => {
    switch(type){
      case "album":{
        const {image,songs,follows,title,slug} = data;
  return (
    <Tooltip title={`${songs.length} songs`} placement='top' arrow>
      <Link to="/">
         <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt='album' loading='lazy' />
              <div className={styles.banner}>
                <Chip 
                label={`${follows} Follows`}
                size='small'
                className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>${title}</p>
            </div>
         </div>
      </Link>
    </Tooltip>
  )
      }
      case "songs":{
        const {image,likes,title} = data;
  return (
         <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt='song' loading='lazy' />
              <div className={styles.banner}>
                <div className={styles.pills}>
                    <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>${title}</p>
            </div>
         </div>
     
  )
      }
      default:
        return <></>;
    }
  }

  return getCard(type)
  
}

export default Card