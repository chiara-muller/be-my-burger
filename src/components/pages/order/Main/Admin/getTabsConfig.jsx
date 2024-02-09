import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AdminPanel/AddForm/AddProductForm";
import EditProductForm from "./AdminPanel/EditForm/EditProductForm";
import HintMessage from "./AdminPanel/EditForm/HintMessage";

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
