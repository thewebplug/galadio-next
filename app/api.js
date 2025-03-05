import axios from "axios";

export const registerUser = async (
  data,
) => {

  try {
    const res = await axios.post(
      `https://api.galadio.jamesteddy.com/open/v1/signup`, data
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
