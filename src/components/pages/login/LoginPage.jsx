import Logo from "../../Logo";
import LoginForm from "./LoginForm"
import styled from "styled-components"

export default function LoginPage() {

  return (
    <LoginPageStyled>
        <Logo />
        <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url("src/F03 assets/F03 burger-background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 4px 0px #00000040;
  filter: brightness(40%);
  z-index: 1;
`;
