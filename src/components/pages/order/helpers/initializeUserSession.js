import { getMenu } from "../../../../api/menu"
import { getLocalStorage } from "../../../../utils/window"

const initializeMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username)
  setMenu(menuReceived)
}

const initializeCart = (username, setCart) => {
  const cartReceived = getLocalStorage(username)
  if (cartReceived) setCart(cartReceived)
}

export const initializeUserSession = async (username, setMenu, setCart) => {
  await initializeMenu(username, setMenu)
  initializeCart(username, setCart)
}

// this function will assure that the Menu is loaded before initializing the cart
