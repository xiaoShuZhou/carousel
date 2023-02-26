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
  };

  return (
    <div>
      <Slider {...settings}>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;
