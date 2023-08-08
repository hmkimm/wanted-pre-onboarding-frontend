import axios from "axios";
import URL from "./URL";

const SignInAPI = async (inputs) => {
  try {
    const res = await axios.post(`${URL}/auth/signin`, inputs, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.error("api 호출 실패", error);
    throw Error;
  }
};

export default SignInAPI;
