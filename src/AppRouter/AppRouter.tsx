
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import APropos from '../pages/APropos';
import Contact from '../pages/Contact';
import ErrorPage from 'pages/ErrorPage';
import Produits from 'pages/ProduitPage';
import ProduitDetPage from 'pages/ProduitDetPage';
import Home from 'pages/Home';


const AppRouter = () => {
  const router = createBrowserRouter([
        {
          path:"/",
          element: <App />,
          errorElement: <ErrorPage />,
          children : [
            {
                index: true,
                element: <Home />
            },
            {
               path : "/produit",
               element: <Produits />


           },
           {
            path : "/produit/:id",
            element: <ProduitDetPage />


        },
            {
                path : "/contact",
                element: <Contact />

            },
            {
                path : "/apropos",
                element: <APropos/>


            },
            

          ]
        }
    ]);
  return <RouterProvider router = {router}/>
};

export default AppRouter