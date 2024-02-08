import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../../enums/product";

export default function EmptyCart({isLoading}) {
  return (
    <EmptyCartStyled className="empty-message">{isLoading ? BASKET_MESSAGE.LOADING_MESSAGE : BASKET_MESSAGE.EMPTY_CART}</EmptyCartStyled>
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
