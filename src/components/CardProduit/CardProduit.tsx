
import style from './CardProduit.module.css'
import Button from '../Button/Button';
import { IProducts } from 'mocks/mock';
import { Link } from 'react-router-dom';




interface ProduitsProps {
  product: IProducts
}


const CardProduit= (props: ProduitsProps,) => {
  
const { product } = props;

  
  // verification
  if (!product) {
    return <p>not found!</p>;
  }
  return (
    <div className={style.cardContainer}>
      <Link to={`/produit/:id${product.id}`} className={style.link}>
        <div key={product.id} className={style.cardContent}>
          <img className={style.cardImg} src={product.image.url} alt={product.image.alt} />
          <div className={style.textContainer}>
            <h2>{product.titre}</h2>
            <p>{product.description1}</p>
            <p>{product.description2}</p>
            <p>Prix: {product.prix} €</p>
            <Button isAvaible={product.isAvaible} productTitre={product.titre} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduit;