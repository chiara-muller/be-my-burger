import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

export default function ProfileInfo() {

  const {username} = useParams()

  return (
    <ProfileInfoStyled>
      <h5 className="greetings">Hey, <span className="username">{username}</span></h5>
      <Link to="/">
        <button>Se déconnecter</button>
      </Link>
      <BsPersonCircle className="icon"/>
    </ProfileInfoStyled>
  )
}

const ProfileInfoStyled = styled.div`

  .greetings {
    font-size: 18px;
    margin: 0px;
    margin-right: 20px;
    padding: 5px;
  }

  button {
    background: none;
    border: none;
    color: darkgray;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .username {
    color: orange;
  }

  .icon {
    margin: 10px;
    font-size: 24px;
  }

`;
