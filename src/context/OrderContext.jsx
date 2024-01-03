/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddActive: true,
  setIsAddActive: () => {},

  isEditActive: false,
  setIsEditActive: () => {},

  currentTabActive: false,
  setCurrentTabActive: () => {},
})
