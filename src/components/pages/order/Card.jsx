import styled from "styled-components";
import { fakeMenu1 } from "../../fakeMenu";

export default function Card() {
  return (
    <CardStyled>
      {fakeMenu1.map((menu) => {
        return (

            <p key={menu.id}>{menu.title}</p>

          )
        })}
    </CardStyled>
    )
  }

const CardStyled = styled.div`
  background-color: red;
  width: 240px;
  height: 330px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  .menu {
    background-color: green;
  }
`;
