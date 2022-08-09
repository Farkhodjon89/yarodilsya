import React from 'react'
import Slider from 'react-slick'
import { Box, useMediaQuery } from '@mui/material'
import SliderArrow from 'public/icons/SliderArrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderPrevArrow = (props) => (
  <Box
    onClick={props.onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      left: -20,
      cursor: 'pointer',
      zIndex: 10,
    }}
  >
    <SliderArrow />
  </Box>
)

const SliderNextArrow = (props) => (
  <Box
    onClick={props.onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      right: -20,
      cursor: 'pointer',
      zIndex: 10,
      svg: {
        transform: 'rotate(180deg)',
      },
    }}
  >
    <SliderArrow />
  </Box>
)

const ItemsSlider = ({ children, slidesToShow, dots = false }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  const settings = {
    arrows: mobile ? false : true,
    infinite: true,
    dots,
    slidesToShow: slidesToShow ? slidesToShow : mobile ? 2 : 6,
    slidesToScroll: 1,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
  }

  return <Slider {...settings}>{children}</Slider>
}

export default ItemsSlider
