import styled from "styled-components";
import { useContext } from "react";
import Card from "../../../../resusable-ui/Card";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfItemIsClicked } from "./helper";

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Menu() {

  const { menu, handleDelete, isModeAdmin, resetMenu, itemSelected, setCurrentTabActive, setIsCollapsed, setItemSelected} = useContext(OrderContext)

  const handleClick = (idItemClicked) => {
    setCurrentTabActive("edit")
    setIsCollapsed(false)
    const itemClicked = menu.find((item) => item.id === idItemClicked )
    setItemSelected(itemClicked)
  }

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  return (
    <MenuStyled>
      {menu.map(({id, title, imageSource, price}) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={ "0,00€" && formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfItemIsClicked(id, itemSelected.id)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`

  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  grid-gap: ${theme.gridUnit * 5}px;
  overflow-y: scroll;

`;
