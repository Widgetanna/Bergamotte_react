import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import HeaderDynamique from './components/HeaderDynamique/HeaderDynamique';



function App() {
  return (
    <>
    <Header />
    <HeaderDynamique />
    <Outlet />
   
    <Footer />
  
   </>
  );
}

export default App;
