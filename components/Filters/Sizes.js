import Accordion from '../Accordion/Accordion'
import { Button, Grid } from '@mui/material'
import addToArray from 'utility/AddToArray'
import Checked from 'public/icons/Checked'
import NotChecked from 'public/icons/NotChecked'
import { Box } from '@mui/system'

const Sizes = ({ sizes = [], sizeTerms, setSizeTerms }) => {
  return (
    <Accordion title='Размер'>
      <Grid container spacing={1}>
        {sizes?.map((size) => (
          <Grid item xs={12} key={size.databaseId}>
            <Button
              fullWidth
              size='large'
              sx={{
                fontWeight: '400',
                justifyContent: 'start',
                color: 'text.primary',
                mb: 1,
              }}
              variant='text'
              onClick={() => addToArray(size, sizeTerms, setSizeTerms)}
            >
              <Box display='flex' alignItems='center' mr={1}>
                {sizeTerms.map((size) => size.slug).includes(size.slug) ? (
                  <Checked />
                ) : (
                  <NotChecked />
                )}
              </Box>
              {size.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Accordion>
  )
}

export default Sizes
