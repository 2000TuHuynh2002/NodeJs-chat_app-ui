import { apiRefresh } from "./axios.utils";
import { isCookieExist } from "./cookie.utils";

const checkAndRefreshToken = async () => {
  if (isCookieExist("isLoggedIn") && !sessionStorage.getItem("accessToken")) {
    const [_, response] = await apiRefresh();
    try {
      const { accessToken, user } = response;
      sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
      sessionStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Failed to get access token:", error);
    }
  }
};

export { checkAndRefreshToken };
