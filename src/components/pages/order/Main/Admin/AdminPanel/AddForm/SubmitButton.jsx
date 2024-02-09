import Button from "../../../../../../resusable-ui/Button";
import SubmitMessage from "./SubmitMessage"

export default function SubmitButton({isSubmitted}) {
  return (
    <>
      <Button
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
  </>
  )
}
