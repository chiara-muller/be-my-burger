import { Link, useParams } from "react-router-dom";

export default function OrderPage() {

  const {inputValue} = useParams()

  return (
    <div>
      <h1>Bonjour {inputValue}</h1>
      <Link to="/">
        <button>Deconnexion</button>
      </Link>
    </div>
  )
}
