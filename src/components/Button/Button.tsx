import React from 'react'
import style from './Button.module.css'


interface ButtonProps {
    isAvaible: boolean;
    productTitre: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ isAvaible, productTitre  }) => {
    const addToCart = (value: string) => {
        console.log(`${value} ajouté au panier !`); 
    };
    
    return isAvaible ? (
      <button className={style.button} onClick={() => addToCart(productTitre)}>Ajouter</button>
    ) : (
      <p>Produit pas disponible</p>
    );
  };
  
  export default Button;