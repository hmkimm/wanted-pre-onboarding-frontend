import URL from "./URL";
import axios from "axios";

const SignUpAPI = async (inputs) => {
  try {
    const res = await axios.post(`${URL}/auth/signup`, inputs, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.error("api 통신 오류", error);
    throw error;
  }
};
export default SignUpAPI;

