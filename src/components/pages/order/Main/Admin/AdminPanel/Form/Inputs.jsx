/* eslint-disable react/display-name */
import React from "react"
import styled from "styled-components"
import SelectInput from "../../../../../../resusable-ui/SelectInput"
import TextInput from "../../../../../../resusable-ui/TextInput"
import { getInputSelectConfig, getInputTextsConfig } from "./inputConfig"

const Inputs = React.forwardRef(({ product, onChange, onFocus, onBlur }, ref) => {

  const inputTexts = getInputTextsConfig(product)
  const inputSelects = getInputSelectConfig(product)

  return (
    <InputsStyled>
      {inputTexts.map((input) => (
        <TextInput
          {...input}
          key={input.id}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          version="minimalist"
          ref={ref && input.name === "title" ? ref : null}
          className={"input"}
        />
      ))}
      {inputSelects.map((inputSelect) => (
        <SelectInput
          {...inputSelect}
          key={inputSelect.id}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ))}
    </InputsStyled>
  )
})

export default Inputs

const InputsStyled = styled.div`

  grid-area: 1 / 2 / -2 / 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  .input:nth-child(1) {
    grid-area: 1 / 1 / -3 / 4;
  }

  .input:nth-child(2) {
    grid-area: 2 / 1 / -2 / 4;
  }

`;
