export const totalPrice = (cart) => {
  return cart.reduce((total, cartItem) => {
    if (isNaN(cartItem.price)) return total
    total += cartItem.price * cartItem.quantity
    return total
  }, 0)
}
