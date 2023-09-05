import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import HeaderDynamique from './components/HeaderDynamique/HeaderDynamique';



function App() {
  return (
    <>
   
    <HeaderDynamique />
  
    <Outlet />
    <Footer />
  
   </>
  );
}

export default App;
