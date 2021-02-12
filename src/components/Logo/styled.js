import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const LogoStyle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 30px;

  png {
    width: 70px;
    height: 70px;
    margin-right: 9px;
  }

  ${breakpoint('md')`
  png {
    width: 100px;
    height: 100px;
  }
`}

`;

export const LogoTitleStyle = styled.span`
  font-size: 2rem;
  line-height: 1.16;
  font-weight: 700;
  text-transform: uppercase;

  ${breakpoint('lg')`
  font-size: 3rem;
`}
 
  ${breakpoint('xl')`
  font-size: 4rem;
  `}
 
`;