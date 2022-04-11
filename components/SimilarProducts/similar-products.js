import React from 'react';
import {Grid, Typography} from "@mui/material";
import ProductItem from "../ProductItem/product-item";
import SectionTitle from "../SectionTitle/section-title";

const SimilarProducts = ({products,title}) => {
  return (
      <>
        <SectionTitle title={title} />
        <Grid container spacing={0} >
          {products.map((product, index) => (
              index < 6 ? <Grid item xs={6} md={2}><ProductItem product={product}/></Grid> : ''
          ))}
        </Grid>
      </>

  );
};

export default SimilarProducts;