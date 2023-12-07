import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {

  const [inputValue, setInputValue ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue("")
   }

   const handleChange = (event) => {
      setInputValue(event.target.value)
    }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h2>Bienvenue chez nous !</h2>
        <br />
        <h4>Connectez-vous</h4>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <Link to="order">
          <button>Accédez à votre espace</button>
        </Link>
      </form>
    </div>
  )
}
