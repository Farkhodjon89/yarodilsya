import { Grid } from '@mui/material'
import React from 'react'
import Product from './Product'

const NewProductsList = ({ data = [], productCard, productCard2 }) => (
  <Grid container spacing={2.5}>
    {data.map((item) => (
      <Grid
        item
        xs={6}
        lg={productCard2 ? 4 : productCard ? 2.1 : 3}
        key={item.databaseId}
      >
        <Product product={item} />
      </Grid>
    ))}
  </Grid>
)

export default NewProductsList
