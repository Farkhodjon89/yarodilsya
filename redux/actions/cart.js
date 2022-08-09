import { ADD, REMOVE, REMOVE_ALL, QUANTITY } from 'redux/types'

export const addToCart = (product, selectedId, selectedQuantity) => ({
  type: ADD,
  payload: {
    ...product,
    selectedId,
    selectedQuantity,
  },
})

export const removeFromCart = (selectedId) => ({
  type: REMOVE,
  payload: selectedId,
})

export const removeAllFromCart = () => ({
  type: REMOVE_ALL,
})

export const quantityToCart = (selectedId, selectedQuantity) => ({
  type: QUANTITY,
  payload: { selectedId, selectedQuantity },
})
