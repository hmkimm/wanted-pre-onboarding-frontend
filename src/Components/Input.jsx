import React from "react";
import { styled } from "styled-components";

const Input = (props) => {
  return (
    <>
      <InputStyle {...props} />
    </>
  );
};

const InputStyle = styled.input`
  width: ${(props) => props.width || "480px"};
  height: 60px;
  padding: 20px;
  margin-bottom: ${(props) => props.$mb || "20px"};
  margin : ${(props) => props.margin};
  border-bottom: 1px solid var(--light-gray);
  font-size: var(--md);

  &::placeholder {
    color: var(--gray);
    font-size: var(--md);
  }

  &:focus {
    border-bottom: 1px solid var(--primary);
  }
`;
export default Input;
