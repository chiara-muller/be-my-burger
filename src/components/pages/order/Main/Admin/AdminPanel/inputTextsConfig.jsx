import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getInputTextsConfig = (newItem) => [
  {
    id: "0",
    name: "title",
    value: newItem.title,
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "1",
    name: "imageSource",
    value: newItem.imageSource,
    type: "text",
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "2",
    name: "price",
    value: newItem.price ? newItem.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
  },
]

export const editInputTextsConfig = (item) => [
  {
    id: "0",
    name: "title",
    value: item.title,
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "1",
    name: "imageSource",
    value: item.imageSource,
    type: "text",
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "2",
    name: "price",
    value: item.price ? item.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
  },
]
