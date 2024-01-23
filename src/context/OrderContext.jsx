import { createContext } from "react";

export default createContext({

  menu: [],
  cart: [],

  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabActive: false,
  setCurrentTabActive: () => {},

  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {},
  handleAddItemToBuy: () => {},

  newItem : {},
  setNewItem : () => {},

  itemSelected : {},
  setItemSelected : () => {},

  titleEditRef : {},
})
