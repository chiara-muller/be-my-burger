import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../theme";


export default function ProfileInfo() {

  const {username} = useParams()

  return (
    <ProfileInfoStyled>
      <div className="profile-container">
        <h5 className="greetings">Hey, <span className="username">{username}</span></h5>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <div className="icon-container">
        <BsPersonCircle className="icon"/>
      </div>
    </ProfileInfoStyled>
  )
}

const ProfileInfoStyled = styled.div`

  display: flex;
  align-items: center;
  text-align: right;
  font-family: 'Open Sans', sans-serif;

  .profile-container {
    flex-direction: column;
  }

  .greetings {
    color: ${theme.colors.greyBlue};
    font-size: 16px;
    margin: 0px;
    padding: 1px 6px;

  }

  button {
    background: none;
    border: none;
    font-size: 12px;
    color: ${theme.colors.greyBlue};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .username {
    color: orange;
  }

  .icon-container {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 36px;
    color: ${theme.colors.greyBlue};
  }

`;
