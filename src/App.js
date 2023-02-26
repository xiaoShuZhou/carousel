import React from 'react';
import Carousel from './components/Carousel';

const App = () => {  
  const items = [
    {
      id: 1,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8fdce60decca4d658ba4af5e010484ec_9366/Forum_84_High_Shoes_Black_ID7315_01_standard.jpg",
      name: "Product 1",
      price: 140,
      originals: true,
      newItem: true
    },
    {
      id: 2,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1985553006be42a9b877afa800e3c6f0_9366/Samba_Shoes_Grey_IG9679_HM4.jpg",
      name: "Product 2",
      price: 200,
      originals: true,
      newItem: true
    },
    {
      id: 3,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1117312e3d59468e87ceafa800e40185_9366/Samba_Shoes_Brown_IG9680_HM4.jpg",
      name: "Product 3",
      price: 300,
      originals: true,
      newItem: true
    },
    {
      id: 4,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/c5d42505961b49569527af5f00baa8d6_9366/Munchen_Shoes_White_GY7399_01_standard.jpg",
      name: "Product 4",
      price: 140,
      originals: true,
      newItem: true
    },
    {
      id: 5,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/38debae04ae44d63aa88af2301524e7d_9366/NMD_S1_RYAT_Shoes_Green_IE4686_01_standard.jpg",
      name: "Product 5",
      price: 140,
      originals: true,
      newItem: true
    },
    {
      id: 6,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d543e63cca0e4497b382af8e00a2d231_9366/Forum_Low_Shoes_Green_IE4585_01_standard.jpg",
      name: "Product 6",
      price: 140,
      originals: true,
      newItem: true
    },
    {
      id: 7,
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f9f95bc75f2b47b89904afa800e488b5_9366/Samba_Shoes_Green_IG9682_HM4.jpg",
      name: "Product 7",
      price: 140,
      originals: true,
      newItem: true
    }
  ];

  return (
    <div className="App">
      <Carousel items={items} />
    </div>    
    );

}

export default App;
