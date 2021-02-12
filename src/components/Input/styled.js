import styled from 'styled-components';
import searchIcon from '../../images/icons/icon_search.svg'

export const InputStyle = styled.input` 
  width: 100%;
  margin-bottom: ${props => props.invalid ? '6px' : '0'};
  padding: 9px 12px;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  border-color: ${props => props.invalid ? 'rgb(244, 41, 15)' : '#e2e2e2'};
 

  &.auth {
    padding: 14px 17px 13px;
    font-size: 1rem;
  }

  &.search {
    padding-left: 40px;    
    background: #fff url(${searchIcon}) no-repeat 12px center;
    background-size: 15px;
  }

  &.message {
    padding: 10px;
    border: none;
  }

  &[type="file"] {
    border: none;
    padding: 0;
    
  }
`;