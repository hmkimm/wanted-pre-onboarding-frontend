import URL from "./URL";

const SignInAPI = async (inputs) => {
  try {
    const res = await fetch(`${URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    const result = await res.json();
    console.log(result);
    return result;
    
  } catch (error) {
    console.error("api 호출 실패", error);
    throw Error;
  }

};

export default SignInAPI;
