import styled from "styled-components"

export default function Logo() {
  return (
    <LogoStyled>

        <h1>BE MY</h1>
          <img src="src/F03 assets/F03 logo-orange.png" alt="logo" />
        <h1>BURGER</h1>

    </LogoStyled>
  )
}

const LogoStyled = styled.div`

  display: flex;
  justify-content: center;
  margin-top: 200px;

  h1 {
    color: #FFA01B;
  }

  img {
    width: 200px;
    height: 150px;
  }
`;
