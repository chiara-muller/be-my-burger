import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

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
          <div className="input-container">
            <BsPersonCircle className="icon"/>
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Entrez votre prénom"
              required
            />
          </div>
          <button> Accédez à mon espace <IoIosArrowForward /> </button>
        </div>
      </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form `
  margin-top: 60px;
  font-family: "Amatic SC", cursive;

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
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
  }

  button {
    color: white;
    width: 400px;
    height: 53px;
    border-radius: 5px;
    border: none;
    background: #FF9F1B;
    font-family: Arial;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
  }

  button:hover {
    color: #FF9F1B;
    background-color: white;
    cursor: pointer;
  }
`
