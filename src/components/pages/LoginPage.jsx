import { useState } from "react"

export default function LoginPage() {

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
    <div>
      <h2>Bienvenue chez nous !</h2>
      <br />
      <h4>Connectez-vous</h4>
      <form action="submit" onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom..."
            required
          />
          <button>Accédez à votre espace</button>
      </form>
    </div>
)

}
