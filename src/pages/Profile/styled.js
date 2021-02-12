import styled from 'styled-components'
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../constants/breakpoints';

export const ProfileAccount = styled.div`
  margin-bottom: 40px;

  ${breakpoint('md')`
    display: flex;
    justify-content: space-between;
`}
`;

export const ProfileAvatar = styled.div`
  margin-bottom: 15px;
  text-align: center;    
  
  img {        
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;    
  }

  ${breakpoint('md')`
    margin-bottom: 0;
    margin-right: 50px; 
`}
`;

export const ProfileInfo = styled.div`
  flex-grow: 1;
  font-size: .889rem; 

  ${breakpoint('md')`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.1rem;
`}
  
${breakpoint('lg')`
  font-size: 1.333rem; 
`}
`;

export const AmountPosts = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px; 
  margin-top: 0;

  a {
    color: #1a1a2e;
  }

  ${breakpoint('md')`
  margin-bottom: 0;  
`}
`;

export const ProfileText = styled.p`
  font-size: .9rem;
  margin-top: 15px;  

  ${breakpoint('md')`
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1rem;
`}
`;

export const AddPostBtnStyle = styled.div`
  margin-bottom: 20px;

  a {     
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    font-size: 0rem;
    border: 1px solid #939597;
    
    transition: .3s;

    &::before,
    &::after {
      content: 'Add';
      position: absolute;      
      top: 50%;
      left: 50%;
      width: 30px;
      height: 2px;
      background-color: #939597;
      transform: translate(-50%, -50%); 
      transition: .3s; 
    }

    &::after {      
      transform: translate(-50%, -50%) rotate(90deg);      
    } 

    &:hover {
      border-color: #222;

      &::before, 
      &::after {
        background-color: #222;
      }
    }   

    &:active {
      border-color: #939597;

      &::before, 
      &::after {
        background-color: #939597;
      }
    }   
  }
`;