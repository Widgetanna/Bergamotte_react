import React from 'react'
import style from './Button.module.css'


interface ButtonProps {
    isAvaible: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({ isAvaible }) => {
    return isAvaible ? (
      <button className={style.button}>Ajouter</button>
    ) : (
      <p>Produit pas disponible</p>
    );
  };
  
  export default Button;