import React from 'react';
import RegistrationRouter from './RegistrationRouter';
import Logo from '../../components/Logo';

import {
  ImgWrapper,
  AuthBlock
} from './styled.js';

const Auth = () => {

  return (
    <>
      <ImgWrapper></ImgWrapper>
      <AuthBlock>
        <Logo />
        <RegistrationRouter />
      </AuthBlock>
    </>
  )
}

export default Auth;