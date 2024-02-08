/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import Inputs from "./Inputs";

const Form = React.forwardRef(({ product, onSubmit, onChange, onFocus, onBlur, children}, ref) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title}/>
      <Inputs product={product} onChange={onChange} onFocus={onFocus} onBlur={onBlur} ref={ref}/>
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

  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }

`;
