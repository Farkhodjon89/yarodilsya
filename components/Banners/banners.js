import React from 'react';
import {Box, Paper} from "@mui/material";

const Banners = ({background}) => {
  return (
      <Box sx={{
        display: 'flex',
        width: '100%',
        flexDirection: {xs: 'column', lg: 'row'},
        justifyContent: 'space-between',
        alignItems: {xs: 'center', lg: 'none'},
        marginBottom: '40px',
        cursor: 'pointer'
      }}>
        <Paper sx={{
          background: background,
          width: {xs: '100%', lg: '49.5%'},
          height: {xs: '90px',md:'200px'},
          maxWidth: '640px',
          borderRadius: '8px'
        }} square/>
        <Paper sx={{
          display: {xs: 'none', md: 'block'},
          background: background,
          width: {xs: '100%', lg: '49.5%'},
          height: '200px', maxWidth: '640px',
          transform: 'matrix(1, 0, 0, -1, 0, 0);',
          borderRadius: '8px'
        }} square/>
      </Box>
  );
};

export default Banners;