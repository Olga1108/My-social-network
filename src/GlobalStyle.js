import styled, {createGlobalStyle} from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    min-width: 320px;
    background: #ffffff;
    font-size: 14px;
    color: #222222;
  }
  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
        outline: none;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    outline: none;
    cursor: pointer;
    border: none;
  }
  .icon {
    cursor: pointer;
  }

`;
export default GlobalStyle;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
  `;