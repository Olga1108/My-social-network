import styled from 'styled-components';

export const FeedPostStyle = styled.article`
  margin-bottom: 30px;
  border: 1px solid #e2e2e2;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    vertical-align: top;
    width: 100%;    
    object-fit: cover;      
  }
`;

export const FeedTitleStyle = styled.div`
  padding: 10px;
  font-size: .7rem; 
  
  .login {
    margin-right: 15px;
  }
`;