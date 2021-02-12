import React from 'react';

import { ReactComponent as LogoImg } from '../../images/icons/logo.svg';
import { LogoStyle, LogoTitleStyle } from './styled';

const Logo = () => {
  return (
    <LogoStyle>
      <LogoImg />
      <LogoTitleStyle>hipstagram</LogoTitleStyle>
    </LogoStyle>
  );
}

export default Logo;