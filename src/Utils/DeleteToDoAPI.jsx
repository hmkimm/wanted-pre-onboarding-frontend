import URL from "./URL";
import axios from "axios";

const DeleteToDoAPI = async (token, TodoID) => {
  try {
    const res = await axios.delete(`${URL}/todos/${TodoID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // const result = res.data;
    // console.log(result);
    // return result;
  } catch (error) {
    console.error("api error", error);
  }
};

export default DeleteToDoAPI;
