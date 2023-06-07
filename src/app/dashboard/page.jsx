import React from 'react'
import style from './page.module.css'

import Dashboards from '@/components/dashboards/dashboard'

const DashboardPage = () => {


  return (
    <div className={style.dashboard}>
      
    <Dashboards/>
     
    </div>
  )
}

export default DashboardPage