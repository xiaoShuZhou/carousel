import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from './Item';

const Carousel = ({ items }) => {
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
 };


 return (
     <Slider {...settings}>
       {items.map(item => (
         <Item key={item.id} {...item} />
       ))}
     </Slider>
 );
};


export default Carousel;
