import React from 'react';
import {Typography} from "@mui/material";

const SectionTitle = ({title}) => {
  return (
      <Typography
          sx={{
            fontSize: {xs: '17px', md: '25px'},
            fontWeight: 600,
            color: 'text.primary',
            lineHeight: '18px',
            marginBottom: '25px'
          }}
      >
        {title}
      </Typography>
  );
};

export default SectionTitle;