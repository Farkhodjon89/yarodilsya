import React from 'react';
import {Accordion, Box, Checkbox, Grid, Typography} from "@mui/material";

const FilterAge = ({ages = []}) => {
  return (
      <Accordion title='Возраст'>
        {ages.map((age,i) => (
            <Box key={i} sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
              <Box sx={{display: 'flex',alignItems: 'center'}}>
                <Checkbox {...label} sx={{color: 'primary.main', width: '18px', height: '18px', borderRadius: '5px'}}/>
                <Typography>{age.name}</Typography>
              </Box>
              <Typography>{age.quantity}</Typography>
            </Box>
        ))}
      </Accordion>
  );
};

export default FilterAge;