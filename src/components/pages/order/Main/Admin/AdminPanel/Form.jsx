/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../resusable-ui/TextInput";
import { getInputSelectConfig, getInputTextsConfig } from "./inputTextsConfig";
import { theme } from "../../../../../../theme";
import SelectInput from "../../../../../resusable-ui/SelectInput";

const Form = React.forwardRef(({ product, onSubmit, onChange, onFocus, onBlur, children}, ref) => {

  const inputTexts = getInputTextsConfig(product)
  const inputSelects = getInputSelectConfig(product)

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title}/>
      <div className="input-fields">
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
      </div>
      <div className="form-footer">{children}</div>
    </FormStyled>
  )
})

export default Form

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  height: 100%;
  width: 70%;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 8px;
  }

  .input:nth-child(1) {
    grid-area: 1 / 1 / -3 / 4;
  }

  .input:nth-child(2) {
    grid-area: 2 / 1 / -2 / 4;
  }

  .button {
    display: flex;
    align-items: center;
    border: none;
    background-color: ${theme.colors.background_white};

    .icon {
      display: flex;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.greyBlue};
      margin: 0 13px 0 8px;
    }
  }

  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }

`;
