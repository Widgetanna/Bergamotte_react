export interface IProductImage {
  url: string;
  alt: string;
}

export interface IProducts{
id: number;
category: string;
titre: string;
description1: string;
description2: string;
image: IProductImage;
prix: number;
isAvaible: boolean;

}




export const PRODUCTS: IProducts[] = [
    {
      id: 1,
      category: "petite plante",
      titre: "Cactus",
      description1: `Les cactus sont des plantes succulentes appartenant à la famille des Cactacées. 
      Ils sont généralement originaires des régions arides et désertiques des Amériques, 
      bien qu'ils aient également été introduits dans d'autres parties du monde en raison de leur popularité 
      en tant que plantes d'intérieur.`,
      description2:
      `Les cactus se caractérisent par leur capacité à stocker de l'eau dans leurs tissus, 
      ce qui leur permet de survivre dans des environnements arides avec de faibles quantités de précipitations. 
      Leurs feuilles sont généralement modifiées en épines, qui aident à réduire la perte d'eau par évaporation 
      et à les protéger des herbivores.`,
      image:{
        url: "images/cactus.jpg",
        alt: "une plante verte dans un pot",
      },
      prix: 19.99,
      isAvaible: true,
    },
    {
      id: 2,
      category: "plante",
      titre: "Bergamote",
      description1: `Citrus bergamia, communément appelé bergamote, est un agrume appartenant à la famille des Rutacées. 
      Il est surtout connu pour son utilisation dans l'industrie de la parfumerie et de l'aromathérapie en raison de l'huile essentielle précieuse 
      qui peut être extraite de son écorce.
      Originaire d'Italie, la bergamote est principalement cultivée dans la région de Calabre, en Sicile et en Côte d'Ivoire. 
      L'arbre est de taille moyenne, avec des feuilles vert foncé et de petites fleurs blanches très parfumées. 
      Ses fruits, les bergamotes, sont de petite taille et ont une peau épaisse et rugueuse, de couleur jaune verdâtre.
      L'huile essentielle de bergamote est obtenue par expression à froid de l'écorce du fruit.`,
      description2: `Elle dégage un parfum frais et citronné, avec des notes florales subtiles. Son arôme distinctif en fait un ingrédient populaire dans les parfums, 
      les cosmétiques, les produits de nettoyage et même dans certaines préparations culinaires. Elle est également largement utilisée en aromathérapie 
      pour ses propriétés relaxantes et apaisantes, qui peuvent aider à soulager le stress et l'anxiété.
      Outre son utilisation dans les domaines de la parfumerie et de l'aromathérapie, la bergamote est également appréciée pour son utilisation culinaire. 
      Son zeste est utilisé pour parfumer les pâtisseries, les confitures, les boissons et les liqueurs. `,
      image: {
        url: "images/Img.png",
        alt: "une plante verte dans un pot",
      },
      prix: 29.99,
      isAvaible: false,
    },
    {
        id: 3,
        category: "plante verte",
        titre: "Monstera deliciosa",
        description1: `Monstera deliciosa est LA star incontournable des plantes “jungle”. 
        Ses incroyables feuilles, comme découpées à la main, lui valent de nombreux petits noms,
        comme plante gruyère, arbre à pain mexicain, plante à trous ou plante ouragan.`,
        description2:  `Exposées à la lumière (jamais directe) ses feuilles grandissent rapidement et prennent cette forme très esthétique 
        et très géométrique. Monstera deliciosa a besoin de place pour s’épanouir.
        C’est un plaisir quotidien pour les yeux, avec son design exceptionnel. C’est aussi l’amie idéale pour un air d’intérieur 
        plus pur, grâce à ses propriétés dépolluantes.
        `,
        image: {
            url:  "images/ImgProduit2.png",
            alt: "une plante verte",
        },
        prix: 39.59,
        isAvaible: true,
      },

    {
      id: 4,
      category: "plante",
      titre: "Pachira",
      description1: `Le pachira est un magnifique arbre originaire des zones tropicales d’Amérique Centrale mais qui s’adapte parfaitement à l’intérieur d’une maison ou d’un appartement.
      Originaire d'Italie, la bergamote est principalement cultivée dans la région de Calabre, en Sicile et en Côte d'Ivoire. 
      Cet arbre tropical d’Amérique du Sud et centrale est aussi appelé châtaignier de Guyane, en raison de son feuillage (plus ou moins) ressemblant. Ce dernier est composé de 5 à 7 folioles 
      autour d’une longue tige, qui leur donne parfois l’allure de longs doigts fins.
      `,
      description2: `En dessous de ce parapluie foliaire se dresse un tronc en forme de bouteille mesurant jusqu’à 1,50 m de haut. Celui-ci a la particularité de stocker de l’eau à sa base, 
      le rendant ainsi plus résistant aux (légers) oublis d’arrosage ! Le pachira ne fleurit pas en intérieur, mais il compense cette absence par un port gracieux et une bonne rusticité.
      Originalité du pachira : il peut être tressé !`,
      image: {
        url: "images/pashira.jpg",
        alt: "une plante verte dans un pot",
      },
      prix: 32.99,
      isAvaible: false,
    },
    {
        id: 5,
        category: "plante verte",
        titre: "Monstera deliciosa",
        description1: `Monstera deliciosa est LA star incontournable des plantes “jungle”. 
        Ses incroyables feuilles, comme découpées à la main, lui valent de nombreux petits noms,
        comme plante gruyère, arbre à pain mexicain, plante à trous ou plante ouragan.`,
        description2:  `Exposées à la lumière (jamais directe) ses feuilles grandissent rapidement et prennent cette forme très esthétique 
        et très géométrique. Monstera deliciosa a besoin de place pour s’épanouir.
        C’est un plaisir quotidien pour les yeux, avec son design exceptionnel. C’est aussi l’amie idéale pour un air d’intérieur 
        plus pur, grâce à ses propriétés dépolluantes.
        `,
        image: {
            url:  "images/ImgProduit2.png",
            alt: "une plante verte",
        },
        prix: 25.50,
        isAvaible: true,
      },
    
  ];
  
 