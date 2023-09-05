import { PRODUCTS } from 'mocks/mock';
import CardProduit from '../components/CardProduit/CardProduit';
import React from 'react';


const ProduitsPage = () => {
 
  return (
    <div>
      {PRODUCTS.map((p) => (
        <CardProduit key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProduitsPage; 