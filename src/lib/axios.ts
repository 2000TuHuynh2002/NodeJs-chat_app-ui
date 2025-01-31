import axios from "axios";

import { SET_TOKENS, LOGOUT } from "@/store/slides/authSlice";
import { CLEAR_ROOMS } from "@/store/slides/roomSlice";
import store from "@/store/store";

const API_URL = process.env.API_URL || "localhost:3000";

const axiosRequest = async (method: string, url: string, data?: object) => {
  const token = store.getState().auth.accessToken || {};

  const [status, response] = await axios({
    method: method,
    url: `http://${API_URL}/${url}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    },
    withCredentials: true,
    data: data,
  })
    .then((response) => {
      return [response.status, response.data];
    })
    .catch((error) => {
      // console.log(error.response);
      return [error.response.status, error.response.data];
    });

  if (status === 200 || status === 201) {
    return [status, response];
  }

  if (status === 409) {
    return [status, response];
  }

  if (response.error === "Access token expired") {
    const [refreshStatus, refreshData] = await axios({
      method: "POST",
      url: `http://${API_URL}/api/auth/refreshToken`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        const { accessToken, user } = response.data;
        store.dispatch(SET_TOKENS({ accessToken, user }));
        return [response.status, response.data];
      })
      .catch((error) => {
        store.dispatch(LOGOUT());
        store.dispatch(CLEAR_ROOMS());
        return [error.response.status, error.response.data];
      });

    if (refreshStatus === 200) {
      return axiosRequest(method, url, data);
    }
  }
  
  return [500, { error: "Internal server error" }];
};

export default axiosRequest;
