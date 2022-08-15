import { SUM } from 'redux/types'

let deliveryPrice = 15000

export const purchaseAmount = (
  state = {
    subtotal: { name: 'Подытог', price: 0 },
    delivery: { name: 'Доставка', price: deliveryPrice },
    sale: { name: 'Скидка', price: 0 },
    total: {
      name: 'Итого',
      price: 0,
    },
  },
  { type, payload }
) => {
  switch (type) {
    case SUM:
      let subtotalPrice = 0
      let salePrice = 0
      payload.forEach((product) => {
        subtotalPrice += product.woocsRegularPrice * product.selectedQuantity
        salePrice += product.onSale
          ? (product.woocsRegularPrice - product.woocsSalePrice) *
            product.selectedQuantity
          : 0
      })
      let totalPrice = subtotalPrice - salePrice + deliveryPrice
      return {
        subtotal: { name: 'Подытог', price: subtotalPrice },
        delivery: { name: 'Доставка', price: deliveryPrice },
        sale: { name: 'Скидка', price: salePrice },
        total: {
          name: 'Итого',
          price: totalPrice,
        },
      }
    default:
      return state
  }
}
