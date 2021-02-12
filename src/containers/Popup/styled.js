import styled, { keyframes } from 'styled-components';

const fadeInDown = keyframes` { 
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`;

export const PopupStyle = styled.div`
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .4);   
`;

export const PopupContentStyle = styled.div`
  position: absolute;
  width: 75%;  
  max-width: 768px;
  max-height: 80vh;    
  padding: 0;
  background-color: #fefefe;
  border: 1px solid #e2e2e2;   
  animation: ${fadeInDown} .3s linear;  
`;

export const PopupBodyStyle = styled.div`
  display: flex;
  height: 60vh;
`;

export const PostImgStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;  
  background-color: #000;
  overflow: hidden;

  img {    
    width: 100%;    
  }
`;

export const PostTitleStyle = styled.div`
  padding: 10px;
  text-align: center;
  font-size: .8rem;
  font-weight: bold;
  border-bottom: 1px solid #d4d4d4;
`;

export const UserBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40%;
`;

export const UserAboutStyle = styled.div`
  display: flex;  
  align-items: center;  
  padding: 10px;
  border-bottom: 1px solid #d4d4d4;

  img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
  }

  span {
    font-size: .9rem;
    font-weight: bold;
  }
`;



export const MessagesStyle = styled.div`
  flex-grow: 1;
`;

export const ButtonStyle = styled.button.attrs({
  type: "submit"
})`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fef568;
  background: none;
  `;

export const FormMessage = styled.form`
  display: flex;
  align-items: center;
  padding-right: 5px 10px 5px 0;
`;

export const PopupCloserStyle = styled.span`
  position: absolute;
  top: -35px;
  right: -25px;
  color: #e2e2e2;
  font-size: 38px;
  font-weight: bold;
  transition: color .3s ease;

  &:hover,
  &:focus {
    color: #222222;
    cursor: pointer;
    text-decoration: none;
  }
`;