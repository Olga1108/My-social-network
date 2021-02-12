import styled from 'styled-components';

export const InputWrap = styled.div`
  margin-bottom: ${props => props.mb ? '32px' : '15px'};
  width: 100%;  
  color: #222;  

  label {
    display: block;
    margin-bottom: 7px;
    margin-left: 15px;
    font-size: .78rem;
  }

  &.change label {
    font-size: .8rem;
    font-weight: bold;
  }

  &.change-avatar {
    text-align: center;

    label {
      position: relative;
      display: inline-block;
      width: 150px;
      height: 150px;
      margin-left: 0;
      cursor: pointer;
      transition: 0.3s;

      img {
        width: 100%; 
        height: 100%;       
        border-radius: 50%;  
        object-fit: cover;     
      }             

      &::before {
        content: 'Change avatar';
        position: absolute;
        width: 100%;
        height: 100%;        
        font-weight: bold;
        line-height: 150px;
        color: #fff;        
        background-color: rgba(0, 0, 0, .5);
        border-radius: 50%; 
        opacity: 0;
        transition: .3s;
      }

      &:hover::before {         
        opacity: 1;
      }
    }

    input {
      display: none;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: .7rem;
  color: #f4290f;
`;