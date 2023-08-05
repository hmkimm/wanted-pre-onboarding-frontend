import URL from "./URL";
import axios from "axios";

const GetToDoAPI = async (token) => {
  try {
    const res = await axios.get(`${URL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.error("api 통신 오류", error);
  }
};

export default GetToDoAPI;
