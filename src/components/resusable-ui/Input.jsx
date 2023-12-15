import styled from "styled-components"

// {Icon && Icon} ==> If there's an icon, it'll add the icon

// eslint-disable-next-line react/prop-types
export default function Input({ value, onChange, Icon, ...otherProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...otherProps}
      />
    </InputStyled>
  )
}


const InputStyled = styled.div`

  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

    .input-icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }

`;
