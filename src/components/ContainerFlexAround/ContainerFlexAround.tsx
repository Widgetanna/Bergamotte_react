
import style from './ContainerFlexAround.module.css';

const ContainerFlexAround = () => {
const title = 'Partners';
// Liste des liens avec leurs noms et URL
const links = [
  { name: 'Fleuristes Interflora', url: 'https://www.interflora.fr/' },
  { name: 'Truffaut', url: 'https://www.truffaut.com/' },
  { name: 'Aquarelle', url: 'https://www.aquarelle.com/' },
  { name: 'René Veyrat', url: 'https://www.reneveyrat.fr/' },
];
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      
      <ul className={style.liens}>
        {links.map((link, index) => (
          <li key={index}>
            <a className={style.fleuristes} 
            href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default ContainerFlexAround;
