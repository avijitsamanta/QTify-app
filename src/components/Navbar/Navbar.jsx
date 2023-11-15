import React from 'react'
import Button from '../Button/Button'
import Search from '../Search/Search'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}> 
        <a href='/'>
        <Logo/>
        </a>
        <Search placeholder="Search a song of your choice"/>
        <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar