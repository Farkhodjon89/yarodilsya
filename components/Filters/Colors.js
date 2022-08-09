import Accordion from '../Accordion/Accordion'
import { Button, Box } from '@mui/material'
import addToArray from 'utility/AddToArray'
import Checked from 'public/icons/Checked'
import NotChecked from 'public/icons/NotChecked'

const Colors = ({ colors = [], colorTerms, setColorTerms }) => {
  return (
    <Accordion title='Цвет'>
      {colors?.map((color) => (
        <Box key={color.databaseId}>
          <Button
            fullWidth
            sx={{
              fontWeight: '400',
              justifyContent: 'start',
              color: 'text.primary',
              mb: 1,
            }}
            onClick={() => addToArray(color, colorTerms, setColorTerms)}
            variant='text'
          >
            <Box display='flex' alignItems='center' mr={1}>
              {colorTerms.map((color) => color.slug).includes(color.slug) ? (
                <Checked />
              ) : (
                <NotChecked />
              )}
            </Box>
            {color.name}
          </Button>
        </Box>
      ))}
    </Accordion>
  )
}

export default Colors
