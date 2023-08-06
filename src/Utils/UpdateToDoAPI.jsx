import URL from "./URL";
import axios from "axios";

const UpdateToDoAPI = async (TodoId, input, token) => {
  try {
    const res = await axios.put(`${URL}/todos/${TodoId}`, input, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const result = res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.error("api error", error);
  }
};

export default UpdateToDoAPI;
