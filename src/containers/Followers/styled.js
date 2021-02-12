import styled from 'styled-components';

export const FollowersStyle = styled.ul`
  
  list-style: none;

  a {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: #222;

    .full-name {
      color: gray;
    }

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;