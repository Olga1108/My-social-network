import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const FeedContainer = styled.div`
  width: 100%;

  ${breakpoint('md')`
  width: 60%;
  margin: 0 auto;
  `}
`;