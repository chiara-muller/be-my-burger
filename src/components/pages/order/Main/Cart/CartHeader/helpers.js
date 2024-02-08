import { findObjectById } from "../../../../../../utils/array";
import { convertStringToBoolean } from "../../../../../../utils/string";

export const calculateTotalPrice = (cart, menu) => {
  return cart.reduce((total, cartItem) => {
    const menuItem = findObjectById(cartItem.id, menu)
    const menuAvailability = convertStringToBoolean(menuItem.isAvailable)
    if (isNaN(menuItem.price)) return total
    if (menuAvailability === false) return total
    console.log("menuItemPrice:", menuItem.price)
    console.log("menuItemIsAvailable:", menuItem.isAvailable)
    total += menuItem.price * cartItem.quantity;
    return total;
  }, 0);
}
