import style from "../pages/Home.module.css";
import SelectionMoment from "components/SelectionMoment/SelectionMoment";
import { PRODUCTS } from "../mocks/mock";

const Home = () => {
  const product = PRODUCTS[0]; 
  
  return (
    <section>
    <div className={style.containeurHaut}></div>
    <div className={style.containeur}>
    
     <div className={style.voile}></div>
      <img className={style.image}
      src = "../../images/shop.jpg" 
      alt="shop fleurist" />
      <div>
      <h1 className={style.text}>Dites-le avec des fleurs</h1>
      <h3 className={style.petitText}>Decouvrez notre collection de plantes pour célébrer les anniversaires</h3>
      </div>
      <button className={style.button}>Voir la collection </button>
      </div>
      <SelectionMoment product={product} />
    </section>
  );
};

export default Home;
