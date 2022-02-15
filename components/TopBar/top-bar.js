import React from 'react';
import {Box, Typography} from "@mui/material";

const TopBar = () => {
  return (
      <Box sx={{
        height: 30,backgroundColor:'#EA56AE;',display: 'flex',justifyContent: 'center',alignItems: 'center'
      }}>
        <Typography sx={{fontSize: 15,fontWeight: 400, color: '#fff'}}>Ликвидация! Скидки до 50%</Typography>
      </Box>
  );
};

export default TopBar;