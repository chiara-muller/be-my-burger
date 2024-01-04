/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";

export default createContext({

  menu: fakeMenu.LARGE,
  setMenu: () => {},

  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabActive: false,
  setCurrentTabActive: () => {},
})
