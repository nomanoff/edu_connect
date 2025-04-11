import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://109.73.205.134:5000"; // debug

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    const { token } = parseCookies();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject("axios interceptor failed: ", error)
);

const ACADEMIES_API_PREFIX = "/api/Academies";
const CLASS_LIST = "/api/class-list";
const AUTH_API_PREFIX = "/api/auth";

// Auth
export const authApi = {
  registerAdmin: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-admin`, data),
  registerTeacher: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-teacher`, data),
  registerParent: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-parent`, data),

  // /api/auth/login
  login: (data) => axios.post(`${AUTH_API_PREFIX}/login`, data),
};

// Academy
export const academyApi = {
  getAcademyList: () => axios.get(`${ACADEMIES_API_PREFIX}`),

  // /api/Academies/{id}
  getAcademyById: (id) => axios.get(`${ACADEMIES_API_PREFIX}/${id}`),
};

export const studentApi = {};

// Class
export const classApi = {
  // get class list

  getAcademyList: () => axios.get(`${CLASS_LIST}`),
};
