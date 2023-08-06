import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignInAPI from "../Utils/SignInAPI";

import Input from "../Components/Input";
import Button from "../Components/Button";
import { FormLayout } from "../Styles/Layout";

const SignIn = () => {
  const navigate = useNavigate();
  const [isValidLogIn, setIsValidLogIn] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await SignInAPI(inputs);
    console.log(result);

    const token = result.access_token
    window.localStorage.setItem("token", JSON.stringify(token));

    navigate("/todo");
  };

  useEffect(() => {
    setIsValidLogIn(inputs.email.includes("@") && inputs.password.length >= 8);
  }, [inputs]);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");

    if (storedToken) {
      navigate("/todo");
    }
  }, []);

  return (
    <FormLayout>
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
      <Button
        data-testid="signup-button"
        disabled={!isValidLogIn}
        onClick={handleSubmit}
      >
        로그인
      </Button>
    </FormLayout>
  );
};

export default SignIn;
