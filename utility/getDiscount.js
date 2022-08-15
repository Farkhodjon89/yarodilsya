export const getDiscount = (price, salePrice) => {
  const finalPrice = (100 * (price - salePrice)) / price
  return `-${finalPrice}%`
}
