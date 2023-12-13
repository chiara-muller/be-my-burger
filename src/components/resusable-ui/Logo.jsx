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
  /* justify-content: center; */
  align-items: center;
  /* margin-top: 200px; */
  transform: scale(2.5);

  h1 {
    /* display: flex; */
    display: inline;
    /* justify-content: center;
    align-items: center; */
    text-align: center;
    color: #FFA01B;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;

  }

  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin: 0 5px;
  }
`;
