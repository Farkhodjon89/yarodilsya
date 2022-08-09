import { Grid } from '@mui/material'
import React from 'react'
import Product from './Product'

const NewProductsList = ({ data = [] }) => {
  return (
    <Grid container spacing={2.5}>
      {data.map((item) => (
        <Grid item xs={6} lg={3} key={item.databaseId}>
          <Product product={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default NewProductsList
