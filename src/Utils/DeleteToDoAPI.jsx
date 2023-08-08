import URL from "./URL";
import axios from "axios";

const DeleteToDoAPI = async (token, TodoID) => {
  try {
    const res = await axios.delete(`${URL}/todos/${TodoID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  } catch (error) {
    console.error("api error", error);
  }
};

export default DeleteToDoAPI;
