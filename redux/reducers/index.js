import { cart } from './cart'
import { wishlist } from './wishlist'
import { purchaseAmount } from './purchaseAmount'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  cart: cart,
  wishlist: wishlist,
  purchaseAmount: purchaseAmount,
})

export default reducers
