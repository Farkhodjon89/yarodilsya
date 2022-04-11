import Accordion from '../../Accordion/Accordion'
import { Button, Grid } from '@mui/material'
import addToArray from 'utility/AddToArray'

const Sizes = ({ sizes = [], sizeTerms, setSizeTerms }) => {
  return (
    <Accordion title='Размер'>
      <Grid container spacing={1}>
        {sizes?.map((size) => (
          <Grid item xs={6} key={size.databaseId}>
            <Button
              fullWidth
              size='large'
              sx={{
                fontWeight: 'normal',
                fontSize: 14,
                color: 'text.primary',
                '&:hover': {
                  color: 'text.primary',
                },
              }}
              variant={
                sizeTerms.map((color) => color.slug).includes(size.slug)
                  ? 'outlined'
                  : 'text'
              }
              onClick={() => addToArray(size, sizeTerms, setSizeTerms)}
            >
              {size.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Accordion>
  )
}

export default Sizes
