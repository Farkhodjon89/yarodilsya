import React from 'react';
import NextLink from 'next/link';
import {Box,Breadcrumbs} from "@mui/material";

const Breadcrumb = ({breadcrumbs}) => {
  return (
      <Breadcrumbs sx={{padding: '20px 0'}}>
        {breadcrumbs.map(({name,slug}, i) => (
            <NextLink key={i} href={slug}>
              <a style={{fontWeight: '400',fontSize: '13px', color: '#999999',lineHeight: '17px',}}>
                {name}
              </a>
            </NextLink>
        ))}
      </Breadcrumbs>
  );
};

export default Breadcrumb;