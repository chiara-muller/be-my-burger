/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export default createContext({

  menu: [],
  setMenu: () => {},

  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabActive: false,
  setCurrentTabActive: () => {},

  handleAdd: () => {},

  handleDelete: () => {},
})
