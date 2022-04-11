import React from 'react';
import {Box, Typography} from "@mui/material";
import NextLink from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import ArrowRight from "../../public/icons/arrowRight";
import ArrowLeft from "../../public/icons/arrowLeft";
import SectionTitle from "../SectionTitle/section-title";

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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };


  return (
      <Box sx={{marginBottom: {xs: '20px', md: '70px'}}}>
        <SectionTitle title={title}/>
        <Slider {...settings}>
          {brands.map(({slug, image, id}) => {
            return (
                <Box key={id} sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid #E8E8E8;',
                  width: '90px',
                  height: '70px',
                  borderRadius: '8px'

                }}>
                  <NextLink  href={slug}>
                    <a>
                      <Image alt="" src={image} width={80} height={60}/>
                    </a>
                  </NextLink>
                </Box>
            )
          })}
        </Slider>

      </Box>
  );
};

export default BrandsSlider;