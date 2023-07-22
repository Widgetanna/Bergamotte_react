import React from 'react';
import CardProduit from '../components/CardProduit/CardProduit';
import Products from '../mocks/mock';


const Produit = () => {
  return (
    <div>
      {Products.map((product) => (
        <CardProduit key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Produit;