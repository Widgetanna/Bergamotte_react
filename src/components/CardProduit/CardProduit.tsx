import React from 'react';
import Products from '../../mocks/mock';
import style from './CardProduit.module.css'
import Button from '../Button/Button';


interface CardProduitProps {
  product: {
    id: number;
    category: string;
    titre: string;
    description1: string;
    description2: string;
    image: string;
    prix: number;
    isAvaible: boolean;
  };
}


const CardProduit: React.FC<CardProduitProps> = ({ product }) => {
  // verification
  if (!product) {
    return <p>not found!</p>;
  }


  return (
    <div className={style.cardContainer}>
      <div key={product.id} className={style.cardContent}>
        <img className={style.cardImg} src={product.image} alt={product.titre} />
        <div className={style.textContainer}>
          <h2>{product.titre}</h2>
          <p>{product.description1}</p>
          <p>{product.description2}</p>
          <p>Prix: {product.prix} €</p>
          <Button isAvaible={product.isAvaible} />
        </div>
      </div>
    </div>
  );
};

export default CardProduit;