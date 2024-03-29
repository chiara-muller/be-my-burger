import styled from "styled-components";
import { theme } from "../../theme";

export default function SelectInput({options, name, value, onChange, Icon, className, ...restProps}) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select name={name} value={value} onChange={onChange} {...restProps}>
        {options.map(({optionValue, label}) => (
          <option key={label} value={optionValue}>{label}</option>
        ))}
      </select>
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.div`

  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: 5px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icône dans le champ select
  }

  select {
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }

`;
