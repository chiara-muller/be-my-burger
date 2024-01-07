import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AddProductForm";
import AddEditForm from "./AddEditForm";

export const getTabsConfig = [
  // {
  //   label:"",
  //   Icon:isCollapsed? <FiChevronUp /> : <FiChevronDown />,
  //   onClick:() => setIsCollapsed(!isCollapsed),
  //   className:isCollapsed? "is-active" : ""
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddProductForm />
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: <AddEditForm />
  }
]

export const getTabActive = (tabs, currentTabActive) =>
  tabs.find((tab) => tab.index === currentTabActive)
