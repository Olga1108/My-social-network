import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {breakpoint} from '../../../constants/breakpoints';

export const UserItemStyle = styled.article `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 8px 15px;
  background: #fff;
  border: 1px solid #e2e2e2;  
 
  a {
    color: #222;
  }  

  ${breakpoint('md')`
    padding-left: 30px;
    padding-right: 30px;
`}
`;

export const UserInfoStyle = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  ${breakpoint('md')`
    width: auto;
    margin-bottom: 0;
`}
`;

export const UserAvatarStyle = styled.div `
  width: 50px;
  height: 50px;
  margin-right: 15px;  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

${breakpoint('md')`
  margin-right: 30px;
`}
`;

export const UserNameStyle = styled.h3 `
  margin: 0;  
  font-size: 1rem;
  font-weight: 400;
 
  ${breakpoint('md')`
  font-size: 1.4rem;
`}
`;