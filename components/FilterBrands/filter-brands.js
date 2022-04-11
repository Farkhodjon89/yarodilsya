import React from 'react';
import {Accordion, Box, Checkbox, Typography} from "@mui/material";

const FilterBrands = ({ages= []}) => {
  return (
      <Accordion title='Бренды'>
        {ages.map((age,i) => (
            <Box key={i} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Checkbox {...label} sx={{color: 'primary.main', width: '18px', height: '18px', borderRadius: '5px'}}/>
                <Typography>{age.name}</Typography>
              </Box>
              <Typography>{age.quantity}</Typography>
            </Box>
        ))}
      </Accordion>
  );
};

export default FilterBrands;