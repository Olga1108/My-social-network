import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import final from '../../images/final.png';
import {breakpoint} from '../../constants/breakpoints';



export const ImgWrapper = styled.div`
  

  ${breakpoint('xl')`
  width: 40%;    
    background-image: url('https://images.unsplash.com/photo-1573068674916-8ec01771bfbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80');
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