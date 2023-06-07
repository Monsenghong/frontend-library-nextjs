import Login from '@/components/BookSearch/loginform/loginform'
import React from 'react'
import style from './page.module.css'
const LoginPage = () => {
  return (
    <div className={style.container}>
         <div className={style.welcome}>Welcome back</div>
        <Login className={style.login}/>
    </div>
  )
}

export default LoginPage