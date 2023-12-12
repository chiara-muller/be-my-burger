import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

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
    <div className="form-container">
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h2>Bienvenue chez nous !</h2>
        <br />
        <h2>Connectez-vous</h2>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button> Accédez à votre espace</button>
      </LoginFormStyled>
    </div>
  )
}

const LoginFormStyled = styled.form `

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;


  }

  input {
    width: 400px;
    height: 55px;
    top: 272.31px;
    left: 32px;
    padding: 18px, 24px, 18px, 24px;
    border-radius: 5px;
    gap: 12.8px;
  }

  button {
    color: white;
    width: 400px;
    height: 53px;
    top: 345.31px;
    left: 32px;
    padding: 18px, 106.2px, 18px, 106.2px;
    border-radius: 5px;
    border: 1px;
    background: #FF9F1B;
    border: 1px solid #FF9F1B;
    font-family: Arial;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
  }
`
