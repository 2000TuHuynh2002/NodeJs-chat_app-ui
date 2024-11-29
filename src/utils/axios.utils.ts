import axios from "axios";

const API_URL = process.env.API_URL || "localhost:3000";

const apiLogin = async (data: any) => {
  return axios({
    method: "POST",
    url: `http://${API_URL}/api/auth/login`,
    headers: {
      "Content-Type": "application/json",
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
};

const apiLogout = async () => {
  return axios({
    method: "POST",
    url: `http://${API_URL}/api/auth/logout`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
    .then((response) => {
      return [response.status, response.data];
    })
    .catch((error) => {
      return [error.response.status, error.response.data];
    });
};

export { apiLogin, apiLogout };
