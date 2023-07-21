import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavDynamique.module.css'

const NavDynamique = () => {
    const navLinks = [
        { id: 1,
        text: 'Home', 
        url: '/' },
        { id:2,
          text: 'Produit', 
          url: '/produit' },
        { id:3,
          text: 'A Propos', 
          url: '/apropos' },
        { id:4,
          text: 'Contact', 
          url: '/contact' },
      ];
  return (
  <ul className={style.list}>
    {navLinks.map((link) => (
      <li key={link.id}>
        <NavLink className={style.link} to={link.url}>{link.text}</NavLink>
      </li>
    ))}
  </ul>
   
  )
}

export default NavDynamique