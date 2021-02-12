import React from 'react';
import { ButtonStyle, ToggleButtonStyle } from './styled'

export const Button = ({ handleClick, children, ...props }) => {
  return (
    <ButtonStyle
      {...props}
      onClick={() => handleClick && handleClick()}
    >
      {children}
    </ButtonStyle>
  );
}

export const ToggleButton = ({ handleClick, children, ...props }) => {
  return (
    <ToggleButtonStyle
      {...props}
      onClick={() => handleClick && handleClick()}
    >
      {children}
    </ToggleButtonStyle >
  )
}