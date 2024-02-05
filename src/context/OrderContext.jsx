import { createContext } from "react";

export default createContext({

  username: "",

  menu: [],

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

  newItem : {},
  setNewItem : () => {},

  itemSelected : {},
  setItemSelected : () => {},

  titleEditRef : {},

  cart: [],
  handleAddItemToBuy: () => {},
  handleDeleteItemToBuy: () => {},
  handleEditItemToBuy: () => {},
  handleItemSelected: () => {},

  isAvailable: true,
  setIsAvailable: () => {},
  isAdvertised: false,
  setIsAdvertised: () => {},

})
