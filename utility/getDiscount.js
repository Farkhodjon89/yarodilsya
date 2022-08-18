export const getDiscount = (price, salePrice) => {
  const finalPrice = Math.round((100 * (price - salePrice)) / price)
  return `-${finalPrice}%`
}
