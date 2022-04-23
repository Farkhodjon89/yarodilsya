import React from 'react';
import {Box, Typography} from "@mui/material";
import NextLink from 'next/link';
import Percent from "../../public/icons/Percent";
import Phone from "../../public/icons/Phone";

const HeaderInfo = () => {
  return (
      <Box sx={{
        display: {xs: 'none',md:'flex'},
        position: 'absolute',
        right: '2%',
        top: '-65%',
        fontWeight: 400,
        fontSize: '13px',
        color: 'rgba(255, 255, 255, 0.8)',
        "&:hover": {
          color: 'white'
        }
      }}>
        <NextLink href='/'>
          <a style={{marginRight: '25px'}}>
            Магазины
          </a>
        </NextLink>
        <NextLink href='/'>
          <a style={{marginRight: '25px'}}>
            Доставка
          </a>
        </NextLink>
        <NextLink href='/'>
          <a style={{display: 'flex', alignItems: 'center', marginRight: '25px'}}>
            <Percent/>
            <Typography sx={{marginLeft: '6px'}}>Кэшбэк</Typography>
          </a>
        </NextLink>
        <NextLink href='tel:+998 93 378 10 55'>
          <a style={{display: 'flex', color: 'white', alignItems: 'center'}}>
            <Phone/>
            <Typography sx={{marginLeft: '6px',fontSize: '13px'}}>+998 93 378 10 55</Typography>
          </a>
        </NextLink>
      </Box>
  );
};

export default HeaderInfo;