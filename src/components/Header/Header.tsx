import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import style from './Header.module.css'



const Header = () => {
  const [title] = useState('Bergamotte');
  return (
    <div className={style.container}>
    <div className={style.petitContainer}>
    <img src= "images/logo.png" alt="feuille-logo" /> 
     <h1>{title}</h1>
     </div>
    <Nav />
   
    </div>

  )
}

export default Header