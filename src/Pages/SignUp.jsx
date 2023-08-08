import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Components/Input";
import Button from "../Components/Button";

import SignUpAPI from "../Utils/SignUpAPI";
import { FormLayout } from "../Styles/Layout";

const SignUp = () => {
  const navigate = useNavigate();
  const [isValidSignUp, setIsValidSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await SignUpAPI(inputs);
    console.log(response);
    navigate("/signin");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputs);
  };

  useEffect(() => {
    setIsValidSignUp(inputs.email.includes("@") && inputs.password.length >= 8);
  }, [inputs]);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");

    if (storedToken) {
      navigate("/todo");
    }
  }, []);

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Input
        name="email"
        value={inputs.email}
        onChange={handleInputChange}
        data-testid="email-input"
        placeholder="이메일"
      />
      <Input
        name="password"
        value={inputs.password}
        onChange={handleInputChange}
        data-testid="password-input"
        placeholder="비밀번호"
        $mb="50px"
      />
      <Button data-testid="signup-button" disabled={!isValidSignUp}>
        회원가입
      </Button>
    </FormLayout>
  );
};

// const SignUpLayout = styled.form`
//   width: 550px;
//   height: 352px;
//   margin: 100px auto;
//   padding: 35px;
//   box-sizing: border-box;
//   border: 1px solid var(--light-gray);
//   border-radius: 10px;
// `;
export default SignUp;
