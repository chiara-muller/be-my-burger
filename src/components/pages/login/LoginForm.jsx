import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

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
        <div className="welcome-container">
          <h2>Bienvenue chez nous !</h2>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        <div className="form-container">
        <VscAccount />
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
          <br />
          <button> Accédez à votre espace <IoIosArrowForward /> </button>
        </div>
      </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form `

  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  hr {
    display: block;
    position: relative;
    padding: 0;
    margin: 40px auto;
    height: 1px;
    width: 400px;
    border: 1px solid #F56A2C;
    background: #F56A2C;
  }

  .welcome-container {
    color: white;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 400px;
    height: 55px;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
    font-family: Arial;
    font-size: 15px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #D3D3D3;
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
`
