import React from 'react';

import { Container, WrapperContentStyle } from './styled';

export const Wrapper = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export const WrapperContent = ({ children }) => {
  return (
    <main id='main'>
      <WrapperContentStyle>
        {children}
      </WrapperContentStyle>
    </main>
  );
}