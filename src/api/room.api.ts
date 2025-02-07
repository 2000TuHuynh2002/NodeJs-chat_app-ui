import axiosRequest from "@/lib/axios";

import store from "@/store/store";

const apiGetRecent = async () => {
  const data = {
    userId: store.getState().auth.user.id,
  };

  const result = axiosRequest("GET", "api/message/recent", data);
  return result;
};

const apiCreateRoom = async (username: string) => {
  const data = {
    username01: username,
    username02: store.getState().auth.user.username,
  };

  return await axiosRequest(
    "POST",
    "api/room/create",
    data
  );
};

export { apiGetRecent, apiCreateRoom };
