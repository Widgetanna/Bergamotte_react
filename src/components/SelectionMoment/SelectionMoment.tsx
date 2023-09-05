import { IProducts, PRODUCTS } from "mocks/mock";
import style from "./SelectionMoment.module.css";

interface ProduitsProps {
  product: IProducts;
}

const SelectionMoment = (props: ProduitsProps) => {
  return (
    <section>
      <div className={style.containeur}>
        <h2>Notre sélection du moment</h2>
        <p>Découvrez notre collection de fleurs, plantes et cadeaux</p>
        <div className={style.cardImg}>
          <div className={style.gridContainer}>
            {PRODUCTS.map((product) => (
              <div key={product.id} className={style.petitContaineur}>
                <img
                  className={style.image}
                  src={product.image.url}
                  alt={product.image.alt}
                />
                <div className={style.infoContaineur}>
                  <h2>{product.titre}</h2>
                  <p>{product.prix} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionMoment;
