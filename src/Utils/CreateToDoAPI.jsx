import URL from "./URL";

const CreateToDoAPI = async (token, input) => {
  try {
    const res = await fetch(`${URL}/todos`, {
      method: "POST",
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      body: JSON.stringify(input),
    });

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("api 통신 오류", error);
    return {};
  }
};

export default CreateToDoAPI;
