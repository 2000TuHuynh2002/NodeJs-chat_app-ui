import axios from "axios";

import store from "@/store/store";

const API_URL = process.env.API_URL || "localhost:3000";

const apiCreateRoom = async (username: string) => {
  const token = store.getState().auth.accessToken;

  const data = {
    username01: username,
    username02: "admin",
  };

  return axios({
    method: "POST",
    url: `http://${API_URL}/api/room/create`,
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
      return [error.response.status, error.response.data];
    });
}

export { apiCreateRoom };