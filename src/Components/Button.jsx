import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <ButtonLayout disabled={props.disabled}>{props.children}</ButtonLayout>
  );
};

const ButtonLayout = styled.button`
  width: 480px;
  height: 60px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? "var(--light-gray)" : "var(--primary)"};
  color: white;
  font-size: var(--md);
  margin-bottom: ${(props) => props.mb};
`;
export default Button;
