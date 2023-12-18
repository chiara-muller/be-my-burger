import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";

export default function Profile() {

  const {username} = useParams()

  return (
    <ProfileStyled>
      <div className="profile-container">
        <h5 className="greetings">Hey, <span className="username">{username}</span></h5>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <div className="icon-container">
        <BsPersonCircle className="icon"/>
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`

  display: flex;
  justify-content: space-between;
  min-width: 100px;
  padding-right: 50px;

  .profile-container {
    flex-direction: column;
    text-align: right;
    margin-right: 1Opx;
  }
  .greetings {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P1};
    margin: 0px;
    padding: 1px 6px;
  }

  .username {
    color: ${theme.colors.primary};
  }

  button {
    background: none;
    border: none;
    font-size: ${theme.fonts.XS};
    color: ${theme.colors.greyBlue};

    position: relative;
    bottom: 2px;

    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
      cursor: pointer;
    }
  }


  .icon-container {
    display: flex;
    align-items: center;
  }

  .icon {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`;
