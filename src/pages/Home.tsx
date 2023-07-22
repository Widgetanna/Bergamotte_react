import React from 'react'
import CardProduit from '../components/CardProduit/CardProduit'
import Products from '../mocks/mock';

const Home = () => {
  const oneCard = Products[0];
  return (
    <>
    <div style={{marginTop: '2%'}}>
    <a href="/produit" style={{ marginLeft: '5%'}}>Aller voir plus</a>
       <hr style={{ width: '90%', margin: '20px auto', borderTop: '1px solid black' }} />
       </div>
       <CardProduit product={oneCard} />
    </>
  );
}

export default Home