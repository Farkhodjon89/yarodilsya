import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import ArrowLeft from "../../public/icons/arrowLeft";
import ArrowRight from "../../public/icons/arrowRight";
import {Box} from "@mui/material";
import Image from 'next/image';

const BaseSlider = ({sliderBanners, products}) => {
  const [windowWidth, setWindowWidth] = useState()

  let resizeWindow = () => setWindowWidth(window.innerWidth)
  useEffect(() => {
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: <SliderPrevArrow/>,
    nextArrow: <SliderNextArrow/>,
  }

  return (
      <Box>
        <Slider {...settings}>
          {sliderBanners.map(({id, image, mobImage}) => {
            return (
                <Box key={id} sx={{display: 'block', borderRadius: '8px'}}>
                  <Image src={windowWidth <= 770 ? mobImage : image} width={1050} height={388}/>
                </Box>
            )
          })}
        </Slider>
        {/*<ProductSlider products={products}/>*/}
      </Box>

  );
};

export default BaseSlider;