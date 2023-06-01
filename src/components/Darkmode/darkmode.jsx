"use client"
import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import { ThemeContext } from '../../../context/ThemeContext'
const Darkmode = () => {
  
    const {toggle,mode} = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.dark}>☀️</div>
        <div className={styles.light}>☽</div>
        <div className={styles.ball} style={mode==='dark'?{left:'2px'}:{right:'2px'}} ></div>
    </div>
  )
}

export default Darkmode