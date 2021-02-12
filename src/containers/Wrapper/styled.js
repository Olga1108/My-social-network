import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const WrapperContentStyle = styled.div`
  width: 100%;
  min-height: 100vh; 
  max-width: 768px;
  margin: 0 auto;  
  padding: 130px 30px 50px;
  background-color: #fff; 

  ${breakpoint('md')`
  padding-top: 100px;
  `}
  
`;