import { Box } from '@mui/material'
import QuantityArrow from 'public/icons/QuantityArrow'

const NewSetQuantity = ({ ml }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      ml={ml}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <QuantityArrow />
      </Box>
      <Box mx={0.5}>1</Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          svg: {
            transform: 'rotate(180deg)',
          },
        }}
      >
        <QuantityArrow />
      </Box>
    </Box>
  )
}

export default NewSetQuantity
