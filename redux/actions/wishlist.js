import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from 'redux/types'

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: {
    ...product,
  },
})

export const removeFromWishlist = (databaseId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: databaseId,
})
