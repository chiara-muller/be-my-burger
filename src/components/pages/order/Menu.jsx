import styled from "styled-components";

export default function Menu() {
  return (
    <MenuStyled>Menu</MenuStyled>
  )
}

const MenuStyled = styled.div`

  flex: 1; // take the space left in the container
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;

`;
