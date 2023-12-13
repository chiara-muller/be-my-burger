import styled from "styled-components"

export default function Logo() {
  return (
    <LogoStyled>
      <h1>BE MY<span><img src="src/F03 assets/F03 logo-orange.png" alt="logo" /></span>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`

  display: flex;
  justify-content: center;
  margin-top: 200px;

  h1 {
    color: #FFA01B;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  img {
    width: 200px;
    height: 150px;
  }
`;
