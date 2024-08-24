
import axios from "axios";
import { AddNewPass } from "../Types";





export const UpdatePasswordFunction = (data) => async (dispatch) => {
  console.log(data);
  try {
    const response = await axios.post(
      "https://backend-coding-yousseftarek80s-projects.vercel.app/auth/reset",
      data
    );
    console.log(response);
    dispatch({
      type: AddNewPass,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: AddNewPass,
      payload: e.response,
    });
  }
};