import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AdminPanel/AddProductForm";
import EditProductForm from "./AdminPanel/EditProductForm";
import HintMessage from "./AdminPanel/HintMessage"

export const getTabsConfig = (hasBeenClicked) => [

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
    Content: hasBeenClicked ? <EditProductForm /> : <HintMessage />
  }
]

export const getTabActive = (tabs, currentTabActive) =>
  tabs.find((tab) => tab.index === currentTabActive)
