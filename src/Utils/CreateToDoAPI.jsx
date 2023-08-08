import axios from "axios";
import URL from "./URL";

const CreateToDoAPI = async (token, input) => {
  try {
    const res = await axios.post(`${URL}/todos`, input, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    const data = res.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error("api 통신 오류", error);
    return {};
  }
};

export default CreateToDoAPI;
