import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyCart({isLoading}) {

  const emptyCartMessage = "Votre commande est vide."
  const emptyLoadingMessage = "Chargement en cours..."

  return (
    <EmptyCartStyled className="empty-message">{isLoading ? emptyLoadingMessage : emptyCartMessage}</EmptyCartStyled>
  )
}

const EmptyCartStyled = styled.span`
  display: flex;
  height: calc(95vh - 10vh - 70px - 70px);
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 2;
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
`;
