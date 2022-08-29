import Accordion from '../Accordion/Accordion'
import { Button } from '@mui/material'
import addToArray from 'utility/AddToArray'
import Checked from 'public/icons/Checked'
import NotChecked from 'public/icons/NotChecked'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

const Brands = ({ brands = [], brandTerms, setBrandTerms }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const checkLength = brands.length !== data.length

  useEffect(() => {
    if (open) {
      setData(brands)
    } else {
      setData(brands.slice(0, 4))
    }
  }, [brands, open])

  return (
    <Accordion title='Бренды'>
      {data?.map((brand) => (
        <Box key={brand.databaseId}>
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
            onClick={() => addToArray(brand, brandTerms, setBrandTerms)}
          >
            <Box display='flex' alignItems='center' mr={1}>
              {brandTerms.map((brand) => brand.slug).includes(brand.slug) ? (
                <Checked />
              ) : (
                <NotChecked />
              )}
            </Box>
            {brand.name}
          </Button>
        </Box>
      ))}
      {brands?.length > 4 && checkLength && (
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

export default Brands
