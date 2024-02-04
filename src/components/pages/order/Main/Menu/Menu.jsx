import styled from "styled-components";
import { useContext } from "react";
import Card from "../../../../resusable-ui/Card";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfItemIsClicked } from "./helper";
import { DEFAULT_IMAGE, EMPTY_ITEM } from "../../../../../enums/product";
import { findObjectById, isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../theme/animations";

export default function Menu() {

  const {
    username,
    menu,
    handleDelete,
    isModeAdmin,
    resetMenu,
    itemSelected,
    titleEditRef,
    setCurrentTabActive,
    setIsCollapsed,
    setItemSelected,
    handleAddItemToBuy,
    handleDeleteItemToBuy,
  } = useContext(OrderContext)

  // on rend la fonction asynchrone pour que le focus attende que les premiers setter soit exécutés avant de s'exécuter lui même
  const handleClick = async (event, idItemClicked) => {
    event.stopPropagation()
    if (!isModeAdmin) return // si on n'est pas en mode admin, on n'execute pas handleClick
    setCurrentTabActive("edit")
    setIsCollapsed(false)
    const itemClicked = findObjectById(idItemClicked, menu)
    await setItemSelected(itemClicked)
    titleEditRef.current.focus()
  }

  const handleCardDelete = (event, id) => {
    event.stopPropagation()
    handleDelete(id, username)
    id === itemSelected.id && setItemSelected(EMPTY_ITEM)
    handleDeleteItemToBuy(id, username)
  }

  const handleAddClick = (event, idItemClicked) => {
    event.stopPropagation()
    const itemToBuy = findObjectById(idItemClicked, menu)
    handleAddItemToBuy(itemToBuy, username)
  }

  if (menu === undefined) return <Loader/>

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map(({id, title, imageSource, price, quantity, isAvailable}) => {
        return (
          <CSSTransition key={id} classNames={"animation-menu"} timeout={300}>
            <Card
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
              leftDescription={ "0,00€" && formatPrice(price)}
              quantity={quantity}
              hasDeleteButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={(event) => handleClick(event, id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfItemIsClicked(id, itemSelected.id)}
              onAddButtonClick={(event) => handleAddClick(event, id)}
              className={`${!isAvailable ? 'not-available' : ''}`}
            />
          </CSSTransition>
        )
      })}
    </TransitionGroup>
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

  .not-available {
    opacity: 0.5;
    image-rendering: url("/images/stock-epuise.png");
    background-image: url("/images/stock-epuise.png");
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
}

  ${menuAnimation}
`;
