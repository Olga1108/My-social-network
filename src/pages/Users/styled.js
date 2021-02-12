import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const NotFoundBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: -130px -30px -50px;
  background: #e2e2e2;

  svg {
    width: 200px;
    height: 195px;
  }

  p {
    margin: 0;
    font-size: 1.667rem;
    font-weight: bold;
    color: #fef568;
    text-align: center;
  }

  
  ${breakpoint('md')`
    margin-top: -100px;
  `}

 
  ${breakpoint('lg')`
  svg {
    width: 256px;
    height: 249px;
  }

  p {      
    font-size: 2.6rem;      
  }
  `}
`;

