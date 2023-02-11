import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
} from "./userType";
import axios from "axios";
import Cookies from "js-cookie";

export const login = (values, navigate) => async (dispatch) => {
  dispatch({
    type: POST_LOGIN_START,
  });
  try {
    const res = await axios.post(
      `https://prohop-express.herokuapp.com/api/users/login`,
      values
    );
    Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
    dispatch({
      type: POST_LOGIN_SUCCESS,
      payload: res.data,
    });
    navigate("/dashboard");
  } catch (e) {
    dispatch({
      type: POST_LOGIN_FAILED,
      payload: e?.response?.data.message,
    });
  }
};
