import Cookies from "js-cookie";

const getCookie = (name: string) => {
  return Cookies.get(name);
};

const setCookie = (name: string, value: string) => {
  return Cookies.set(name, value);
};

const deleteCookie = (name: string) => {
  return Cookies.remove(name);
};

const isCookieExist = (name: string) => {
  return Cookies.get(name) ? true : false;
};

export { getCookie, setCookie, deleteCookie, isCookieExist };
