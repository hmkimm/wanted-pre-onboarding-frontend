import styled, { css } from "styled-components";

const LayoutStyle = css`
  width: 550px;
  min-height: 352px;
  margin: 100px auto;
  padding: 35px;
  box-sizing: border-box;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
`;

const FormLayout = styled.form`
  ${LayoutStyle}
`

export {FormLayout, LayoutStyle} ;
