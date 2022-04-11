import { SUM } from 'redux/types'

export const purchaseAmount = (products) => ({
  type: SUM,
  payload: products,
})
