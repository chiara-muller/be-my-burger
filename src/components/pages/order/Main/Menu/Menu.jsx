import styled from "styled-components";
import { useContext } from "react";
import Card from "../../../../resusable-ui/Card";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfItemIsClicked } from "./helper";
import { DEFAULT_IMAGE, EMPTY_ITEM, IMAGE_NO_STOCK } from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../utils/string"
import Ribbon from "../../../../resusable-ui/Ribbon"

export default function Menu() {

  const {
    username,
    menu,
    handleDelete,
    isModeAdmin,
    resetMenu,
    itemSelected,
    setItemSelected,
    handleAddItemToBuy,
    handleDeleteItemToBuy,
    handleItemSelected,
  } = useContext(OrderContext)

  // on rend la fonction asynchrone pour que le focus attende que les premiers setter soit exécutés avant de s'exécuter lui même
  const handleClick =  (idItemClicked) => {
    if (!isModeAdmin) return // si on n'est pas en mode admin, on n'execute pas handleClick
    handleItemSelected(idItemClicked)
  }

  const handleCardDelete = (event, id) => {
    event.stopPropagation()
    handleDelete(id, username)
    id === itemSelected.id && setItemSelected(EMPTY_ITEM)
    handleDeleteItemToBuy(id, username)
  }

  const handleAddClick = (event, idItemClicked) => {
    event.stopPropagation()
    handleAddItemToBuy(idItemClicked, username)
  }

  let cardContainerClassName = isModeAdmin ? "card-container is-hoverable" : "card-container"

  if (menu === undefined) return <Loader/>

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map(({id, title, imageSource, price, isAvailable, isAdvertised}) => {
        return (
          <CSSTransition key={id} classNames={"animation-menu"} timeout={300}>
            <div className={cardContainerClassName}>
            {convertStringToBoolean(isAdvertised) && <Ribbon/>}
              <Card
                key={id}
                title={title}
                imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isModeAdmin}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={() => handleClick(id)}
                isHoverable={isModeAdmin}
                isSelected={checkIfItemIsClicked(id, itemSelected.id)}
                onAddButtonClick={(event) => handleAddClick(event, id)}
                overlapImageSource={IMAGE_NO_STOCK}
                isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
              />
            </div>
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

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px; // pour éviter une zone de click verticale bizarre qu'on voit qu'au pointeur de l'outil inspect du navigateur
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
`;
