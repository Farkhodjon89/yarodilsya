import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import ArrowLeft from '../../public/icons/arrowLeft'
import ArrowRight from '../../public/icons/arrowRight'
import { Box } from '@mui/material'
import Image from 'next/image'
import ProductSlider from '../ProductsSlider/product-slider'
import useMediaQuery from '@mui/material/useMediaQuery'
import NextLink from 'next/link'

const BaseSlider = ({ sliderBanners, products }) => {
  const matches = useMediaQuery('(max-width: 600px)')

  const SliderPrevArrow = (props) => (
    <button className='sliderPrevArrow' onClick={props.onClick}>
      <ArrowLeft />
    </button>
  )

  const SliderNextArrow = (props) => (
    <button className='sliderNextArrow' onClick={props.onClick}>
      <ArrowRight />
    </button>
  )

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline;',
        height: { xs: '170px', md: '430px' },
        marginBottom: { xs: '20px', md: '35px' },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '80%', borderRadius: '8px' },
          maxWidth: '1050px',
        }}
      >
        <Slider {...settings}>
          {sliderBanners.map(({ id, image, mobImage }, i) => {
            return (
              <NextLink key={i} href='/catalog'>
                <a>
                  <Box sx={{ display: 'block', borderRadius: '8px' }}>
                    <Image
                      alt=''
                      src={matches ? mobImage : image}
                      width={1050}
                      height={395}
                    />
                  </Box>
                </a>
              </NextLink>
            )
          })}
        </Slider>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: '20%',
          maxWidth: '200px',
        }}
      >
        <ProductSlider title='Товар дня' products={products} />
      </Box>
    </Box>
  )
}

export default BaseSlider
