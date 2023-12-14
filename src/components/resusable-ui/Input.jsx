import { BsPersonCircle } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function Input({ value, onChange, placeholder }) {
  return (
    <div className="input-container">
      <BsPersonCircle className="input-icon"/>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        required
      />
    </div>

  )
}
