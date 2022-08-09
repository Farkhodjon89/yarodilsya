import { Box } from '@mui/material'
import ItemsSlider from 'components/ItemsSlider'
import React from 'react'
import Product from './Product'

const SliderProducts = ({ title = '', data = [], slidesToShow }) => (
  <Box my={slidesToShow ? 0 : 5}>
    <Box
      sx={{
        fontWeight: 600,
        fontSize: slidesToShow ? 16 : 25,
        lineHeight: slidesToShow ? '22px' : '34px',
        mb: slidesToShow ? 0 : 3,
        textAlign: slidesToShow ? 'center' : 'start',
      }}
    >
      {title}
    </Box>
    <ItemsSlider slidesToShow={slidesToShow} dots={!!slidesToShow}>
      {data.map((item) => (
        <Product product={item} key={item.databaseId} />
      ))}
    </ItemsSlider>
  </Box>
)

export default SliderProducts
