import Accordion from 'components/Accordion'
import { Button, Box } from '@mui/material'
import ColorTick from 'components/ColorTick'
import addToArray from 'utilities/AddToArray'

const Colors = ({ colors = [], colorTerms, setColorTerms }) => {
  return (
    <Accordion title='Цвет'>
      {colors.map((color) => (
        <Box key={color.databaseId}>
          <Button
            startIcon={
              <ColorTick
                color={color.color}
                active={colorTerms
                  .map((color) => color.slug)
                  .includes(color.slug)}
              />
            }
            fullWidth
            sx={{
              fontWeight: 'normal',
              fontSize: 14,
              lineHeight: '17px',
              justifyContent: 'flex-start',
              height: 45,
              '&:hover': {
                color: 'secondary.main',
              },
            }}
            color={
              colorTerms.map((color) => color.slug).includes(color.slug)
                ? 'secondary'
                : 'primary'
            }
            onClick={() => addToArray(color, colorTerms, setColorTerms)}
            size='large'
          >
            {color.name}
          </Button>
        </Box>
      ))}
    </Accordion>
  )
}

export default Colors
