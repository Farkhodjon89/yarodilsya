import Accordion from '../../Accordion/Accordion'
import {Button, Box} from '@mui/material'
import ColorTick from 'components/ColorTick/ColorTick'
import addToArray from 'utility/AddToArray'

const Colors = ({colors = [], colorTerms, setColorTerms}) => {
  return (
      <Accordion title='Цвет'>
        {colors?.map((color) => (
            <Box key={color.databaseId}>
              <Button
                  // startIcon={
                  //   <ColorTick
                  //     color={color.color}
                  //     active={colorTerms
                  //       .map((color) => color.slug)
                  //       .includes(color.slug)}
                  //   />
                  // }
                  fullWidth
                  sx={{
                    fontWeight: 'normal',
                    fontSize: 16,
                    lineHeight: '17px',
                    justifyContent: 'flex-start',
                    textTransform: 'capitalize',
                    // height: 45,
                    color: 'text.primary',
                    marginBottom: '10px',
                  }}
                  // color={
                  //   colorTerms.map((color) => color.slug).includes(color.slug)
                  //       ? 'text.primary'
                  //       : 'text.primary'
                  // }
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
