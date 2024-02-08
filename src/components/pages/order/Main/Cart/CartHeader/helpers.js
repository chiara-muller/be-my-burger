import { findObjectById } from "../../../../../../utils/array";
import { convertStringToBoolean } from "../../../../../../utils/string";

export const calculateTotalPrice = (cart, menu) => {
  return cart.reduce((total, cartItem) => {
    const menuItem = findObjectById(cartItem.id, menu);
    if (isNaN(menuItem.price)) return total
    if (convertStringToBoolean(menuItem.isAvailable === false)) return total;
    total += menuItem.price * cartItem.quantity;
    return total;
  }, 0);
}
