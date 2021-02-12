import React from 'react';
import { InputStyle } from './styled'

const Input = React.forwardRef(
  ({ onChange, ...props }, ref) => {
  return (
      <InputStyle
        {...props}
        ref={ref}
        onChange={onChange}
      />
    )
  })

export default Input;