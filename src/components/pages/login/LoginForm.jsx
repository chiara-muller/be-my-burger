import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import { BsPersonCircle } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import TextInput from '../../resusable-ui/TextInput';
import Button from '../../resusable-ui/Button';
import { theme } from '../../../theme';
import { authenticateUser } from "../../../api/user"
import Welcome from './Welcome';

export default function LoginForm() {

  const [inputValue, setInputValue ] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    authenticateUser(inputValue)
    setInputValue("")
    navigate(`order/${inputValue}`)
   }

   const handleChange = (event) => {
      setInputValue(event.target.value)
    }

  return (
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <Welcome/>
        <div>
          <TextInput
            value={inputValue}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            Icon={<BsPersonCircle />}
            className={"input-login"}
            required
            version="normal"
          />
          <Button
            label="Accédez à mon espace"
            Icon={<IoIosArrowForward/>}
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

  .input-login {
    margin: 18px 0;
  }
`
