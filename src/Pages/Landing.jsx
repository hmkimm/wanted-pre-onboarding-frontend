import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import { LayoutStyle } from "../Styles/Layout";
import { styled } from "styled-components";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <LandingLayout>
      <Button onClick={() => navigate("/signup")} $mb="30px">
        회원가입
      </Button>
      <Button onClick={() => navigate("/signin")}>로그인</Button>
    </LandingLayout>
  );
};

const LandingLayout = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default Landing;
