import { createContext } from "react";

export default createContext({

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
  setItemSelected : () => {}
})
