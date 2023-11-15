import React from 'react'
import styles from "./Search.module.css"
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg'

function Search({placeholder}) {

  function handleClick(e){
    e.preventDefault();
    console.log(e)
  }
  return (
    <form className={styles.wrapper} onSubmit={handleClick}>
        <input type='text'  className={styles.search} placeholder={placeholder} required/>
        <button type='submit' className={styles.searchButton}>
            <SearchIcon/>
        </button>
    </form>
  )
}

export default Search