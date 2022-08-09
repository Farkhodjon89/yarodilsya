import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from 'redux/types'

export const wishlist = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST:
      return [...state, payload]
    case REMOVE_FROM_WISHLIST:
      return state.filter((item) => item.databaseId !== payload)
    default:
      return state
  }
}
