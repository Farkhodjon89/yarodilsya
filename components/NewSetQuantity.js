import { Box } from '@mui/material'
import QuantityArrow from 'public/icons/QuantityArrow'
import { useDispatch } from 'react-redux'
import { quantityToCart } from 'redux/actions/cart'

const NewSetQuantity = ({
  quantity,
  setQuantity,
  max,
  id,
  ml,
  mr,
  justifyContent = 'space-between',
}) => {
  const dispatch = useDispatch()
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent={justifyContent}
      ml={ml}
      mr={mr}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => {
          if (quantity !== 1) {
            setQuantity(--quantity)
            dispatch(quantityToCart(id, quantity))
          }
        }}
      >
        <QuantityArrow />
      </Box>
      <Box mx={0.5}>{quantity}</Box>
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
        onClick={() => {
          if (quantity !== max) {
            setQuantity(++quantity)
            dispatch(quantityToCart(id, quantity))
          }
        }}
      >
        <QuantityArrow />
      </Box>
    </Box>
  )
}

export default NewSetQuantity
