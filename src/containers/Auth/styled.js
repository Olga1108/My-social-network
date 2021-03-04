import styled from 'styled-components';

import {breakpoint} from '../../constants/breakpoints';



export const ImgWrapper = styled.div`
  

  ${breakpoint('xl')`
  width: 40%;    
    background-image: url('../../images/final.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;   
`}
`;

export const AuthBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;

  ${breakpoint('lg')`
    width: 60%;    
`}
`;

export const FormAuth = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 100%;
  max-width: 350px;  
  margin-bottom: 40px;
  padding: 0 15px;  
`;

export const FormAuthTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.16;
`;

export const AuthLink = styled.p`
  margin: 0;          
  text-align: center;

  a {
    color: #fef568;
    transition: color .2s ease;

    &:hover, 
    &:active {
      color: #f5df4d;
    }

  }
`;

 // background-image: url(${final});