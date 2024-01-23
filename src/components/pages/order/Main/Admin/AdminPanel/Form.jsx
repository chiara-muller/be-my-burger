/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../resusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextsConfig";

const Form = React.forwardRef(({ product, onSubmit, onChange, children }, ref) => {

  const inputTexts = getInputTextsConfig(product)

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title}/>
      <div className="input-fields">
      {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={onChange}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}
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

  .image-container {
    border-radius: 5px;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }

  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
