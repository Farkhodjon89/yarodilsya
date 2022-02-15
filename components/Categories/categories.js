import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {Box, Typography} from "@mui/material";

const Categories = ({categoriesBanners,title}) => {
  return (
      <>
        <Typography sx={{fontWeight: 600, fontSize: 25, color: 'text.primary',marginBottom: '25px'}}>{title}</Typography>
        <Box sx={{justifyContent: 'space-between' ,display: 'flex', flexWrap: 'wrap', marginBottom: '40px'}}>
          {categoriesBanners.map(({id,image}) => {
            return (
                <NextLink href={'/'} key={id}>
                  <a>
                    <Image alt='' src={image} width={200} height={130}/>
                  </a>
                </NextLink>
            )
          })}
        </Box>
      </>

  );
};

export default Categories;