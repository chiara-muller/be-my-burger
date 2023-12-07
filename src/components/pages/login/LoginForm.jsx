import { useState } from 'react'

export default function LoginForm() {

  const [inputValue, setInputValue ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${inputValue}`)
    setInputValue("")
   }

   const handleChange = (event) => {
      setInputValue(event.target.value)

    }

  return (
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
      <button>Accédez à votre espace</button>
    </form>
  )
}
