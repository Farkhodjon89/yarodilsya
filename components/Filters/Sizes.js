import Accordion from '../Accordion/Accordion'
import { Button } from '@mui/material'
import addToArray from 'utility/AddToArray'
import Checked from 'public/icons/Checked'
import NotChecked from 'public/icons/NotChecked'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

const Sizes = ({ sizes = [], sizeTerms, setSizeTerms }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const checkLength = sizes?.length !== data?.length

  useEffect(() => {
    if (open) {
      setData(sizes)
    } else {
      setData(sizes?.slice(0, 4))
    }
  }, [sizes, open])
  return (
    <Accordion title='Размер'>
      {data?.map((size) => (
        <Box key={size.databaseId}>
          <Button
            fullWidth
            size='large'
            sx={{
              fontWeight: '400',
              justifyContent: 'start',
              color: 'text.primary',
              mb: 0.5,
              p: 0.5,
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
        </Box>
      ))}
      {sizes?.length > 4 && checkLength && (
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

export default Sizes
