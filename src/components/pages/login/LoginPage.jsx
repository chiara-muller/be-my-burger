import styled from "styled-components"
import Logo from "../../resusable-ui/Logo";
import LoginForm from "./LoginForm"

export default function LoginPage() {

  return (
    <LoginPageStyled >
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: url("public/images/F03 burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-position: center;
    background-size: cover;
    filter: brightness(40%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }


`;
