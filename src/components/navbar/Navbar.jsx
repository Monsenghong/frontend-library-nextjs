'use client'

import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'
import Darkmode from '../Darkmode/darkmode'
const Navbar = () => {

const links = [
    {
        id:'1',
        title:'Home',
        url:'/'
    },
    {
        id:'2',
        title:'About',
        url:'/about'
    },
    {
        id:'3',
        title:'Contact',
        url:'/contact'
    },
    {
        id:'4',
        title:'Portfolio',
        url:'/portfolio'
    },
    {
        id:'5', 
        title:'Dashboard',
        url:'/dashboard'
    },
    {
        id:'6', 
        title:'Books',
        url:'/blog'
    }
]   

  return (

    <div className={style.container} ><Link className={style.logo} href='/'>Library</Link>
    <div className={style.link}>
        <Darkmode/>
    {
       links.map(link =>(
        <Link key={links.id} href={link.url}>{link.title}</Link>
       ))
    }

    <button className={style.logout} onClick={()=>{
        console.log("logout")
    }}>Logout</button>
    </div>
    </div>
  )
}

export default Navbar