import axios from "axios";
import { parseCookies } from "nookies";

axios.defaults.baseURL = "https://edc-test.ilmhub.uz"; // debug

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
const CLASS_API_PREFIX = "/api/Classes";
const AUTH_API_PREFIX = "/api/auth";
const STUDENT_API_PREFIX = "/api/Students";
const TEACHER_API_PREFIX = "/api/Teachers";
const CREATE_TEACHER_API = "/api/TokensForTeachers/generate";

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

// Student
export const studentApi = {
  // get student list
  getStudentList: () => axios.get(`${STUDENT_API_PREFIX}`),
};

// Class
export const classApi = {
  getClassList: () => axios.get(`${CLASS_API_PREFIX}`),
  postClass: (data) => axios.post(`${CLASS_API_PREFIX}`, data),
  deleteClass: (id) => axios.delete(`${CLASS_API_PREFIX}/${id}`),
};

// Teacher
export const teacherApi = {
  getTeacherList: () => axios.get(`${TEACHER_API_PREFIX}`),
  
  registerTeacherAsync: (data) => 
    axios.post(`${CREATE_TEACHER_API}`, data)
};
