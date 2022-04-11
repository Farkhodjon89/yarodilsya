import React, { useState } from 'react'
import {
  Grid,
  Drawer,
  Button,
  Box,
  IconButton,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material'
// import FilterIcon from 'public/icons/Filter'
// import SortIcon from 'public/icons/Sort'
// import Cross from 'public/icons/Cross'

const MobileFiltersAndSort = ({
  filtersComponent,
  sortBy,
  setSortBy,
  sortByItems,
}) => {
  const [open, setOpen] = useState({ filter: false, sort: false })
  const items = [
    {
      name: 'Фильтры',
      // icon: <FilterIcon />,
      open: open.filter,
      close: (r) => setOpen({ filter: r, sort: false }),
      drawer: filtersComponent,
      height: '90%',
    },
    {
      name: 'Сортировка',
      // icon: <SortIcon />,
      open: open.sort,
      close: (r) => setOpen({ filter: false, sort: r }),
      drawer: (
        <>
          <FormControl component='fieldset'>
            <RadioGroup aria-label='sortBy' name='sort'>
              {sortByItems.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                  checked={sortBy === item.value}
                  onChange={(e) => {
                    setSortBy(e.target.value)
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </>
      ),
      height: '40%',
    },
  ]
  return items.map((item) => (
    <Grid
      item
      xs={6}
      sx={{ display: { xs: 'block', md: 'none' } }}
      key={item.name}
    >
      <Button
        variant='outlined'
        size='large'
        color='secondary'
        startIcon={item.icon}
        fullWidth
        onClick={() => item.close(true)}
      >
        {item.name}
      </Button>
      <Drawer
        open={item.open}
        onClose={() => item.close(false)}
        sx={{ '.MuiDrawer-paper': { height: item.height, p: 2 } }}
        anchor='bottom'
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 600 }}>
            {item.name}
          </Typography>
          <IconButton
            aria-label='Cross'
            onClick={() => item.close(false)}
            sx={{
              path: { stroke: (theme) => theme.palette.primary.main },
            }}
          >
            {/*<Cross />*/}
          </IconButton>
        </Box>
        {item.drawer}
        {open.filter && (
          <Button
            variant='outlined'
            color='secondary'
            size='large'
            sx={{ mt: 2 }}
            onClick={() => item.close(false)}
          >
            Применить
          </Button>
        )}
      </Drawer>
    </Grid>
  ))
}

export default MobileFiltersAndSort
