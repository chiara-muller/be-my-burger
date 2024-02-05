import { findObjectById } from "../../../../../../utils/array";

export const calculateTotalPrice = (cart, menu) => {
  return cart.reduce((total, cartItem) => {
    const menuItem = findObjectById(cartItem.id, menu);
    total += menuItem.price * cartItem.quantity;
    return total;
  }, 0);
}
