import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import TextInput from '../../resusable-ui/TextInput';
import PrimaryButton from '../../resusable-ui/PrimaryButton';
import { theme } from '../../../theme';

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
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            Icon={<BsPersonCircle className="input-icon"/>}
            required
          />
          <PrimaryButton
            label="Accédez à mon espace"
            Icon={<IoIosArrowForward className="button-icon"/>}
          />
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
    margin-bottom: 40px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .button-icon {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};
    }
`
