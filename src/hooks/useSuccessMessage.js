import { useState } from "react";

export function useSuccessMessage() {

  const [ isSubmitted, setIsSubmitted ] = useState(false)

  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, "2000");
  }
  return { isSubmitted, displaySuccessMessage }
}
