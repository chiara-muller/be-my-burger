import styled from "styled-components";
import CartItem from "./CartItem";
import { BASKET_MESSAGE, DEFAULT_IMAGE } from "../../../../../../enums/product";
import { checkIfItemIsClicked } from "../../Menu/helper";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../utils/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { cartAnimation } from "../../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../../utils/string";
import Sticker from "../../../../../resusable-ui/Sticker"
import { formatPrice } from "../../../../../../utils/maths";

export default function CartItems() {

  const {
    username,
    menu,
    cart,
    isModeAdmin,
    itemSelected,
    handleDeleteItemToBuy,
    handleItemSelected
  } = useContext(OrderContext)

  const handleClick =  (idItemClicked) => {
    if (!isModeAdmin) return // si on n'est pas en mode admin, on n'execute pas handleClick
    handleItemSelected(idItemClicked)
  }

  const handleItemDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteItemToBuy(id, username)
  }

  return (
    <TransitionGroup component={CartItemsStyled}>
      {cart.map((cartItem) => {
        const menuItem = findObjectById(cartItem.id, menu)
        return (
          <CSSTransition appear={true} classNames={"animation-cart"} key={cartItem.id} timeout={300}>
            <div className="card-container" >
              {convertStringToBoolean(menuItem.isAdvertised) && (
                <Sticker className="badge-new" />
              )}
              <CartItem
                {...menuItem}
                imageSource={menuItem.imageSource ? menuItem.imageSource : DEFAULT_IMAGE}
                quantity={cartItem.quantity}
                onDeleteItem={(event) => handleItemDelete(event, cartItem.id)}
                isClickable={isModeAdmin}
                onClick={() => handleClick(cartItem.id)}
                isSelected={checkIfItemIsClicked(cartItem.id, itemSelected.id)}
                price={convertStringToBoolean(menuItem.isAvailable) ? formatPrice(menuItem.price) : BASKET_MESSAGE.NOT_AVAILABLE}
                isAdvertised={menuItem.isAdvertised}
              />
            </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>

  )
}

const CartItemsStyled = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    position: relative;
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }

  .badge-new {
    position: absolute;
    z-index: 1;
    bottom: 10%;
    left: 21%;
    transform: translateY(-21%);
    transform: translateX(-5%);
    }

  ${cartAnimation}

`;
