import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../theme";


export default function NavbarRightSide() {

  const {username} = useParams()

  return (
    <NavbarRightSideStyled>
      <div className="profile-container">
        <h5 className="greetings">Hey, <span className="username">{username}</span></h5>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <div className="icon-container">
        <BsPersonCircle className="icon"/>
      </div>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`

  display: flex;
  align-items: center;
  text-align: right;
  font-family: 'Open Sans', sans-serif;

  .profile-container {
    flex-direction: column;
  }

  .greetings {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P1};
    margin: 0px;
    padding: 1px 6px;
  }

  button {
    background: none;
    border: none;
    font-size: ${theme.fonts.XS};
    color: ${theme.colors.greyBlue};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .username {
    color: ${theme.colors.primary};
  }

  .icon-container {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-left: ${theme.spacing.xxs};
    margin-right: ${theme.spacing.xxs};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }

`;
