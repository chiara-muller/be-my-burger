import { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext"
import { isEmpty } from "../../../../../../utils/array"
import EmptyCart from "./EmptyCart"
import CartItems from "./CartItems"

export default function CartBody() {

  const { menu, cart } = useContext(OrderContext)

  const isCartEmpty = isEmpty(cart)

  return (
    <>{isCartEmpty ? <EmptyCart isLoading={menu === undefined}/> : <CartItems />}</>
  )
}
