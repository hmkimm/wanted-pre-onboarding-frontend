import URL from "./URL";
import axios from "axios";

const SignUpAPI = async (inputs) => {
  try {
    const res = await fetch(`${URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    if (!res.ok) {
      throw new Error("API 호출이 실패하였습니다.");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("api 통신 오류", error);
    throw error;
  }
};
export default SignUpAPI;

// const SignUpAPI = async (inputs) => {
//   try {
//     const res = await axios.post(`${URL}/auth/signup`, inputs, {
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default SignUpAPI;
