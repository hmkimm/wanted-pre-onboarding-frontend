import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
// ===ROOT===

:root {

  //font-size
  --sm : 14px;
  --md : 16px;
  --lg : 18px;

  //color
  --primary : #21BF48;
  --gray : #767676;
  --light-gray : #C4C4C4;

}

button {
  padding: 0;
  cursor: pointer;
  border: none;
  color: inherit;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
  }
}

input {
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  ul,li {
    margin: 0;
    padding: 0;
  list-style: none;
  }
`;

export default GlobalStyle;
