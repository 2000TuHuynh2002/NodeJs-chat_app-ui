import axios from "axios";

import { setTokens, logout } from "@/store/slides/authSlice";
import store from "@/store/store";

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

const apiRefresh = async () => {
  return axios({
    method: "POST",
    url: `http://${API_URL}/api/auth/refreshToken`,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
    .then((response) => {
      const { accessToken, user } = response.data;
      store.dispatch(setTokens({ accessToken, user }));
      return [response.status, response.data];
    })
    .catch((error) => {
      store.dispatch(logout());
      return [error.response.status, error.response.data];
    });
};

const apiFindUserByUsername = async (username: string) => {
  const accessToken = sessionStorage.getItem("accessToken") as string;
  const token = JSON.parse(accessToken) || {};

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

const apiGetRecentMessages = async () => {
  const accessToken = sessionStorage.getItem("accessToken") as string;
  const token = JSON.parse(accessToken) || {};

  return axios({
    method: "GET",
    url: `http://${API_URL}/api/message/recent/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
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

const apiCreateConversation = async (username: string) => {
  const accessToken = sessionStorage.getItem("accessToken") as string;
  const token = JSON.parse(accessToken) || {};

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

export {
  apiLogin,
  apiLogout,
  apiRefresh,
  apiFindUserByUsername,
  apiGetRecentMessages,
  apiCreateConversation
};
