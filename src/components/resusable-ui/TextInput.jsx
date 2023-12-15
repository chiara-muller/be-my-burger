import styled from "styled-components"
import { theme } from "../../theme";

// eslint-disable-next-line react/prop-types
export default function TextInput({ value, onChange, Icon, ...otherProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...otherProps}/>
    </TextInputStyled>
  )
}
// {Icon && Icon} ==> If there's an icon, it'll add the icon

const TextInputStyled = styled.div`

  box-sizing: border-box;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.white};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

    .input-icon {
      font-size: 15px;
      margin-right: 8px;
      color: ${theme.colors.greySemiDark}
    }

    input {
      border: none;
      font-size: 15px;
      color: ${theme.colors.dark};
      width: 100%;

      &::placeholder {
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
      }
    }


`;
