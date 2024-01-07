import React from "react"
import styled, { css } from "styled-components"
import { theme } from "../../theme";


// export default function TextInput({
//     value,
//     onChange,
//     Icon,
//     className,
//     version = "normal",
//     ...otherProps
//   }) {
//   return (
//     <TextInputStyled className={className} version={version}>
//       <div className="icon">{Icon && Icon}</div>
//       <input value={value} onChange={onChange} type="text" {...otherProps}/>
//     </TextInputStyled>
//   )
// }
// {Icon && Icon} ==> If there's an icon, it'll add the icon


// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef(({value,
    onChange,
    Icon,
    className,
    version = "normal",
    ...otherProps
  }, ref) => {
      return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...otherProps} ref={ref}/>
    </TextInputStyled>
  )
  })

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

  /* ${(props)  => {
    if (props.version === "normal") return extraStyleNormal
    if (props.version === "minimalist") return extraStyleMinimalist
  }} */

  ${(props) => extraStyle[props.version]}
  // or we can desctructure props like so => ${({version}) => extraStyle[version]}

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
const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist
}


export default TextInput;
