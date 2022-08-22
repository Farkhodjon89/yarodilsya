import Accordion from '../Accordion/Accordion'
import { Button, Box } from '@mui/material'
import addToArray from 'utility/AddToArray'
import Checked from 'public/icons/Checked'
import NotChecked from 'public/icons/NotChecked'
import { useEffect, useState } from 'react'

const Colors = ({ colors = [], colorTerms, setColorTerms }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const checkLength = colors?.length !== data?.length

  useEffect(() => {
    if (open) {
      setData(colors)
    } else {
      setData(colors?.slice(0, 4))
    }
  }, [colors, open])

  return (
    <Accordion title='Цвет'>
      {data?.map((color) => (
        <Box key={color.databaseId}>
          <Button
            fullWidth
            sx={{
              fontWeight: '400',
              justifyContent: 'start',
              color: 'text.primary',
              mb: 0.5,
              p: 0.5,
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
      {colors?.length > 4 && checkLength && (
        <Box
          onClick={() => setOpen(true)}
          sx={{
            textAlign: 'center',
            width: 110,
            color: '#EA56AE',
            backgroundColor: 'rgba(234, 86, 174, 0.1)',
            borderRadius: '25px',
            py: 0.5,
            fontSize: 14,
            lineHeight: '18px',
            mx: 'auto',
            cursor: 'pointer',
          }}
        >
          Показать еще
        </Box>
      )}
    </Accordion>
  )
}

export default Colors
