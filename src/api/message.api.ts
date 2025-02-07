import axiosRequest from "@/lib/axios";
import store from "@/store/store";

const apiSendMessage = async (
  roomId: string,
  friendId: string,
  message: string
) => {
  const currentUser = store.getState().auth.user.id;

  const data = {
    senderId: currentUser,
    recipientId: friendId,
    content: message,
    roomId: roomId,
  };

  return axiosRequest("POST", "api/message/send-message", data);
};

const apiGetMessagesByRoomId = async (roomId: string) => {
  return axiosRequest("GET", `api/message/get-messages-by-room-id/${roomId}`);
};

export { apiSendMessage, apiGetMessagesByRoomId };
