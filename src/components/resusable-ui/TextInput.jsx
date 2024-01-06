/* eslint-disable react/prop-types */
import styled, { css } from "styled-components"
import { theme } from "../../theme";


export default function TextInput({
    value,
    onChange,
    Icon,
    className,
    version = "normal",
    ...otherProps
  }) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...otherProps}/>
    </TextInputStyled>
  )
}
// {Icon && Icon} ==> If there's an icon, it'll add the icon

const TextInputStyled = styled.div`

  box-sizing: border-box;
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${(props)  => {
    if (props.version === "normal") return extraStyleNormal
    if (props.version === "minimalist") return extraStyleMinimalist
  }}

`

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
  `

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`
