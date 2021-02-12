import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const PostsStyle = styled.div`
  display: flex;
  flex-wrap: wrap; 
  margin-right: -5px;  
  margin-left: -5px;
  

  ${breakpoint('md')`
    margin-right: -10px;
    margin-left: -10px;
`}
`;