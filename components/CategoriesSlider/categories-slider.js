import React, {useState} from 'react';
import Slider from 'react-slick';
import ArrowLeft from "../../public/icons/arrowLeft";
import ArrowRight from "../../public/icons/arrowRight";
import NextLink from 'next/link';
import {Box} from "@mui/material";

const CategoriesSlider = ({categories}) => {

  const [active, setActive] = useState(false)

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
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SliderPrevArrow/>,
    nextArrow: <SliderNextArrow/>,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
      <Box sx={{
        borderBottom: '2px solid rgba(221, 221, 221, 0.5);',
        fontSize: {xs: '13px', md: '16px'},
        fontWeight: {xs: '600', md: '400'},
        margin: '15px 0',
        textTransform: 'uppercase',
        padding: '14px 0'
      }}>
        <Slider {...settings}>
          {categories.map(({id, name, slug}) => (
              <NextLink href={`/catalog/${slug}`} key={id}>
                <a onClick={() => setActive(true)}>
                  <Box sx={{":hover": {color: 'primary.main'}}}>
                    {name}
                  </Box>
                </a>
              </NextLink>
          ))}
        </Slider>
      </Box>
  )
};

export default CategoriesSlider;