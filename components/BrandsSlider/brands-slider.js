import React from 'react';
import {Box, Typography} from "@mui/material";
import NextLink from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import ArrowRight from "../../public/icons/arrowRight";
import ArrowLeft from "../../public/icons/arrowLeft";

const BrandsSlider = ({brands,title}) => {
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

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 12,
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


  return (
      <Box>
        <Typography sx={{fontWeight: 600, fontSize: '25px', color: 'text.primary',marginBottom: '25px'}}>{title}</Typography>
        <Slider {...settings}>
          {brands.map(({slug, image, id}) => {
            return (
                <NextLink key={id} href={slug}>
                  <a>
                    <Image alt="" src={image} width={80} height={60}/>
                  </a>
                </NextLink>
            )
          })}
        </Slider>

      </Box>
  );
};

export default BrandsSlider;