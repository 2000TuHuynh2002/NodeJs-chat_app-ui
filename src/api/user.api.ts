import axiosRequest from "@/lib/axios";

const apiFindByUsername = async (username: string) => {
  return axiosRequest("GET", `api/user/username/${username}`);
};

export { apiFindByUsername };
