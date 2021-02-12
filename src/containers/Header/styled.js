import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const StyleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 95;
  padding: 16px 0;
  background-color: #939597;
  color: #fff;
  &:hover {
    background-color: #a9aaac;
  }
`;

export const StyleHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FieldSearch = styled.form`
  order: 1;
  width: 100%;
  margin-top: 15px;
  text-align: center;
  
  ${breakpoint('md')` 
    order: 0;
    width: auto;
    margin-top: 0;
    margin-right: auto;
    text-align: left;
  
`}`;

export const StyleHeaderTitle = styled.div`
    
${breakpoint('md')` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`}`;

export const Navbar = styled.ul`
  
  text-align: right;
  line-height: .7;

  ${breakpoint('md')` 
    margin-left: auto;
  
`}
  li {
    margin-left: 20px;
    display: inline-block;    

    &:first-child {
      margin-left: 0;
    }    

    button {
      background: none;
      border: none;
      line-height: .7;
      margin: 0;
      padding: 0;
    }

    .active .icon path {
      fill: #fef568;
    }

    .icon {
      width: 25px;
      height: 25px;
      cursor: pointer;
      transition: all .6s linear;

      path {
        fill: #f5df4d;
        transition: fill .2s linear;
      }
    } 

    &:hover path {
      fill: #fef568;
    }

    &:active {
      transform-origin: center;
      
    }
  }
`;