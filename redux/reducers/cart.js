import { ADD, REMOVE, REMOVE_ALL, QUANTITY } from 'redux/types'

export const cart = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...state]
    case REMOVE:
      return state.filter((item) => item.selectedId !== payload)
    case REMOVE_ALL:
      return []
    case QUANTITY:
      return state.map((item) =>
        item.selectedId === payload.selectedId
          ? { ...item, selectedQuantity: payload.selectedQuantity }
          : item
      )
    default:
      return state
  }
}
