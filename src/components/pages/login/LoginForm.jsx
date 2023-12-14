import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import Input from '../../resusable-ui/Input';


export default function LoginForm() {

  const [inputValue, setInputValue ] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
   }

   const handleChange = (event) => {
      setInputValue(event.target.value)
    }

  return (
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        <div>
          <Input
            value={inputValue}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
          />
          <div className="button-container">
            <button> Accédez à mon espace </button>
            <IoIosArrowForward className="button-icon"/>
          </div>
        </div>
      </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form `

  font-family: "Amatic SC", cursive;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;

  hr {
    border: 1.5px solid #F56A2C;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: white;
    font-size: 36px;
  }

  .input-container {
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
    border: 1px solid white;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .input-icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
  }

  .button-container {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    border-radius: 5px;
    border: 1px solid #FF9F1B;
    background: #FF9F1B;

    button {
      border: none;
      background: none;
      color: white;
      font-size: 15px;
      font-weight: 600;
    }

    .button-icon {
      color: white;
    }
/*
    &:hover:not(:disabled) {
      color: #FF9F1B;
      background-color: white;
      transition : all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #FF9F1B;

    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    } */

  }

  .button-container:hover {
    color: #FF9F1B;
    border: 1px solid #FF9F1B;
    background-color: white;
    cursor: pointer;
    transition: all 200ms ease-out;

      button {
        color: #FF9F1B;
        cursor: pointer;
      }

      .button-icon {
      color: #FF9F1B;
    }
  }
`
