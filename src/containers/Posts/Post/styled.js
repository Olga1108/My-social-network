import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../../constants/breakpoints';

export const PostsItemStyle = styled.div`  
  width: 50%;   
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;  

  ${breakpoint('md')`
  width: calc(100 / 3);   
  max-height: 250px; 
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  `}

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;    
    cursor: pointer;  
  }
`;