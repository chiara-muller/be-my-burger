import styled from "styled-components";
import CartItem from "./CartItem";
import { DEFAULT_IMAGE } from "../../../../../../enums/product";
import { checkIfItemIsClicked } from "../../Menu/helper";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../../utils/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { cartAnimation } from "../../../../../../theme/animations";


export default function CartItems() {

  const {
    username,
    itemSelected,
    setItemSelected,
    setCurrentTabActive,
    setIsCollapsed,
    titleEditRef,
    cart,
    isModeAdmin,
    handleDeleteItemToBuy
  } = useContext(OrderContext)

  const handleItemDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteItemToBuy(id, username)
  }

  const handleCartItemClick = async (idItemClicked) => {
    if (!isModeAdmin) return // si on n'est pas en mode admin, on n'execute pas handleClick
    setCurrentTabActive("edit")
    setIsCollapsed(false)
    const itemClicked = findObjectById(idItemClicked, cart)
    await setItemSelected(itemClicked)
    titleEditRef.current.focus()
  }

  return (
    <CartItemsStyled>
      <TransitionGroup>
        {cart.map((cartItem) => {
          return (
            <CSSTransition appear={true} classNames={"animation-cart"} key={cartItem.id} timeout={300}>
              <div className="card-container" >
                <CartItem
                  {...cartItem}
                  imageSource={cartItem.imageSource ? cartItem.imageSource : DEFAULT_IMAGE}
                  onDeleteItem={(event) => handleItemDelete(event, cartItem.id)}
                  isClickable={isModeAdmin}
                  onClick={() =>handleCartItemClick(cartItem.id)}
                  isSelected={checkIfItemIsClicked(cartItem.id, itemSelected.id)}
                  price={cartItem.isAvailable ? cartItem.price : NaN}
                  className={"item"}
                />
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </CartItemsStyled>
  )
}

const CartItemsStyled = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
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

  ${cartAnimation}

`;
