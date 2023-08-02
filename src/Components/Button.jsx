import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return <ButtonLayout {...props}>{props.children}</ButtonLayout>;
};

const ButtonLayout = styled.button`
  width: ${(props) => props.width || "480px"};
  height: ${(props) => props.height || "60px"};
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? "var(--light-gray)" : "var(--primary)"};
  color: white;
  font-size: var(--md);
  margin-bottom: ${(props) => props.mb};
`;
export default Button;
