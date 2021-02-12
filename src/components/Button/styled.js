import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 11px 59px;  
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.167;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #fef568;
  
  
  transition: background-color .3s ease;

  &:hover, 
  &:active {
    background-color: #f5df4d;
  }

  &.btn {
    padding: 11px 20px;  
    font-size: .8rem;
  }
`;

export const ToggleButtonStyle = styled(ButtonStyle)`  
  padding: 7px 30px;
  font-size: .8rem;  
  background-color:${props => props.isFollow ? " #e2e2e2" : '#fef568'};

  &:hover {
    background-color:${props => props.isFollow ? " #939597" : '#f5df4d'};
  }

  &:active {
    background-color:${props => props.isFollow ? " #939597" : 'f5df4d'};  
  } 

  &.btn-follow {
    padding-left: 0;
    padding-right: 0;
    width: 120px;
  }

  &.btn-profile {
    width: 100%;
  }
  ${breakpoint('md')`
    font-size: .8rem; 
   
    &.btn-profile {
      font-size: 1.1rem;
  } 
  `}
 
  ${breakpoint('lg')`
  font-size: .9rem;   

     &.btn-profile {
      font-size: 1.3rem;
    }       
  
`}`;