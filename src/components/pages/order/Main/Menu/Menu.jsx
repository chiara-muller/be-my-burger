import styled from "styled-components";
import { useContext } from "react";
import Card from "../../../../resusable-ui/Card";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfItemIsClicked } from "./helper";
import { EMPTY_ITEM } from "../../../../../enums/product";

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Menu() {

  const { menu, handleDelete, isModeAdmin, resetMenu, itemSelected, titleEditRef, setCurrentTabActive, setIsCollapsed, setItemSelected} = useContext(OrderContext)

  // on rend la fonction asynchrone pour que le focus attende que les premiers setter soit exécutés avant de s'exécuter lui même
  const handleClick = async (idItemClicked) => {
    if (!isModeAdmin) return // si on n'est pas en mode admin, on n'execute pas handleClick
    setCurrentTabActive("edit")
    setIsCollapsed(false)
    const itemClicked = menu.find((item) => item.id === idItemClicked )
    await setItemSelected(itemClicked)
    titleEditRef.current.focus()
  }

  const handleAddClick = (title, imageSource, price, quantity) => {
    const itemToBuy = {title, imageSource, price, quantity}
    console.log(itemToBuy)

  }

  const handleCardDelete = (event, id) => {
    event.stopPropagation()
    handleDelete(id)
    id === itemSelected.id && setItemSelected(EMPTY_ITEM)
  }

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  return (
    <MenuStyled>
      {menu.map(({id, title, imageSource, price, quantity}) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={ "0,00€" && formatPrice(price)}
            quantity={quantity}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfItemIsClicked(id, itemSelected.id)}
            onAddButtonClick={() => handleAddClick(title, imageSource, formatPrice(price), quantity)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`


  background: ${theme.colors.background_white};
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-template-columns: repeat(3, 1fr); // easier when we delete an item
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  grid-gap: ${theme.gridUnit * 5}px;
  overflow-y: scroll;

`;
