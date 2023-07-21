import React from 'react'
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className={style.list}>
      <li><NavLink className={style.link} to="/">Home</NavLink></li>
      <li><NavLink className={style.link} to="/produit">Produit</NavLink></li>
      <li><NavLink className={style.link} to="/apropos">A Propos</NavLink></li>
      <li><NavLink className={style.link} to="/contact">Contact</NavLink></li>
    </ul>
  );
}

export default Nav