import React, { useState } from 'react'
import NavDynamique from '../../NavDynamique/NavDynamique'
import style from './HeaderDynamique.module.css'


const HeaderDynamique = () => {
    const [title] = useState('Bergamotte');
  return (
    <div className={style.container}>
    <div className={style.petitContainer}>
   <img src= "images/logo.png" alt="logo" /> 
     <h1>{title}</h1>
     </div>
    <NavDynamique />
    </div>
  )
}

export default HeaderDynamique