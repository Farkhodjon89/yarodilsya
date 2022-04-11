import React from 'react';
import {Grid, Typography} from "@mui/material";
import ProductItem from "../ProductItem/product-item";
import Slider from 'react-slick';
import ArrowLeft from "../../public/icons/arrowLeft";
import ArrowRight from "../../public/icons/arrowRight";
import SectionTitle from "../SectionTitle/section-title";

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
    slidesToShow: title === 'Товар дня' ? 1 : 6,
    slidesToScroll: 1,
    prevArrow: <SliderPrevArrow/>,
    nextArrow: <SliderNextArrow/>,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  let productList = []

  for (const product of products) {
    productList.push(<ProductItem title={title} product={product}/>)
  }

  return (
      <>
        {title === 'Товар дня'
            ? <Typography sx={{fontWeight: 600, fontSize: '16px', color: 'text.primary', textAlign: 'center'}}>
              Товар дня
            </Typography>
            : <SectionTitle title={title}/>}
        <Slider {...settings}>
          {productList}
        </Slider>
      </>

  );
};

export default ProductSlider;