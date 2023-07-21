
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import APropos from '../pages/APropos';
import Contact from '../pages/Contact';
import Produit from '../pages/Produit';

const AppRouter = () => {
  
    const router = createBrowserRouter([
        {
          path:"/",
          element: <App />,
          children : [
            {
                index: true,
                element: <Home/>
            },
            {
                path : "/contact",
                element: <Contact />

            },
            {
                path : "/apropos",
                element: <APropos/>


            },
            {
                path : "/produit",
                element: <Produit />


            }

          ]
        }
    ]);
  return <RouterProvider router = {router}/>
};

export default AppRouter