import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {Box, Typography, useMediaQuery} from "@mui/material";
import SectionTitle from "../SectionTitle/section-title";

const Categories = ({categoriesBanners, title}) => {
  const matches = useMediaQuery('(max-width: 900px)')

  return (
      <>
        <SectionTitle title={title} />
        <Box sx={{justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', marginBottom: '40px'}}>
          {categoriesBanners.map(({id, image, mobImage}) => {
            return (
                <Box key={id} sx={{width: {xs: '50%', md: '33.3%', lg: '16.66%'}, marginBottom: '5px'}}>
                  <NextLink href={'/'}>
                    <a>
                      <Image alt='' src={matches ? mobImage : image} width={matches ? 155 : 200} height={matches ? 90 : 130}/>
                    </a>
                  </NextLink>
                </Box>

            )
          })}
        </Box>
      </>

  );
};

export default Categories;