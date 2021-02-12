import React from 'react';
import { InputWrap, ErrorMessage } from './styled';

const InputWrapper = ({ label, forHtml, children, error, ...props }) => {
  return (
    <InputWrap {...props}>
      {label && <label htmlFor={forHtml}>{label}</label>}
      {children}
      {error && <ErrorMessage>{error.message || "Invalid field"}</ErrorMessage>}
    </InputWrap>
  )
}

export default InputWrapper;