import styled from "styled-components";
import { useContext } from "react";
import Card from "../../../../resusable-ui/Card";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths"
import OrderContext from "../../../../../context/OrderContext";
import { TiDelete } from "react-icons/ti"
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Menu() {

  const { menu, handleDelete, isModeAdmin } = useContext(OrderContext)

  return (
    <MenuStyled>
      {(menu.length === 0) ?
        (isModeAdmin ? <EmptyMenuAdmin /> : <EmptyMenuClient />)
        :
        menu.map(({id, title, imageSource, price}) => {
          return (
            <Card
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
              leftDescription={ "0,00€" && formatPrice(price)}
              deleteButton={isModeAdmin && <button className="delete-button" onClick={() => handleDelete(id)}><TiDelete className="icon"/></button> }
            />
          )
        })
      }
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

  .delete-button {
    all: unset;
    position: absolute;
    left: 80%;
    padding: 0px;
    margin: 0px;
    display: flex;
    color: ${theme.colors.primary};
    cursor: pointer;
    width: 30px;
    height: 30px;

    &:hover {
      color: red;
    }

    &:active {
      color: ${theme.colors.primary}
    }

    .icon {
      width: 100%;
      height: 100%;
    }
  }

`;
