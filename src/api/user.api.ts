import axios from "axios";

import store from "@/store/store";

const API_URL = process.env.API_URL || "localhost:3000";

const apiFindByUsername = async (username: string) => {
  const token = store.getState().auth.accessToken;

  return axios({
    method: "GET",
    url: `http://${API_URL}/api/user/username/${username}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    },
    withCredentials: true,
    data: username,
  })
    .then((response) => {
      return [response.status, response.data];
    })
    .catch((error) => {
      return [error.response.status, error.response.data];
    });
};

export { apiFindByUsername };