import axios from 'axios';

import store from "@/store/store";

const API_URL = process.env.API_URL || 'localhost:3000';

const apiGetRecent = async () => {
  const token = store.getState().auth.accessToken;

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

const apiSendMessage = async (message: string) => {
  const token = store.getState().auth.accessToken;
  const currentUser = store.getState().auth.user.id;
  const currentFriend = store.getState().conversation.friend_id;
  const currentRoom = store.getState().conversation.id;

  const data = {
    senderId: currentUser,
    recipientId: currentFriend,
    content: message,
    roomId: currentRoom,
  };

  return axios({
    method: "POST",
    url: `http://${API_URL}/api/message/send-message/`,
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

export { apiGetRecent, apiSendMessage };
