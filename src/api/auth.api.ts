import axiosRequest from "@/lib/axios";

const apiLogin = async (data: any) => {
  return axiosRequest("POST", "api/auth/login", data);
};

const apiLogout = async () => {
  return axiosRequest("POST", "api/auth/logout");
};

export { apiLogin, apiLogout };
