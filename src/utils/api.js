import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = "https://advanced-walleye-awaited.ngrok-free.app/"; // debug

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const { accessToken } = parseCookies();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // set the Authorization header with the token
    }

    return config;
  },
  (error) => Promise.reject("axios interceptor failed: ", error)
);

const ACADEMIES_API_PREFIX = "/api/academies";
const AUTH_API_PREFIX = "/api/auth";

// Auth
export const authApi = {
  registerAdmin: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-admin`, data),
  registerTeacher: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-teacher`, data),
  registerParent: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-parent`, data),
};

// Academy
export const academyApi = {
  getAcademyLIST: () => axios.get(`${ACADEMIES_API_PREFIX}`),
};
