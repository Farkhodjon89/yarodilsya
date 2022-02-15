import React from 'react';
import {Grid, Typography} from "@mui/material";
import ProductItem from "../ProductItem/product-item";
import Slider from 'react-slick';
import ArrowLeft from "../../public/icons/arrowLeft";
import ArrowRight from "../../public/icons/arrowRight";

const SliderPrevArrow = (props) => (
    <button
        className="sliderPrevArrow"
        onClick={props.onClick}

    ><ArrowLeft/></button>
);

const SliderNextArrow = (props) => (
    <button
        className="sliderNextArrow"
        onClick={props.onClick}
    ><ArrowRight/></button>
);

const ProductSlider = ({products, title}) => {

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <SliderPrevArrow/>,
    nextArrow: <SliderNextArrow/>,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  let productList = []

  for (const product of products) {
    productList.push(<ProductItem product={product}/>)
  }

  return (
      <>
        <Typography sx={{fontWeight: 600, fontSize: 25, color: 'text.primary',marginBottom: '25px'}}>{title}</Typography>
        <Slider {...settings}>
            {productList}
        </Slider>
      </>

  );
};

export default ProductSlider;