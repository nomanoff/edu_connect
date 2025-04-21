import axios from "axios";
import { parseCookies } from "nookies";

// API konfiguratsiyasi
axios.defaults.baseURL = "https://edc-test.ilmhub.uz"; // debug
axios.defaults.withCredentials = true;

// Axios interceptor: har bir so'rovga tokenni qo'shish
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

// API Prefixlar
const ACADEMIES_API_PREFIX = "/api/Academies";
const CLASS_API_PREFIX = "/api/Classes";
const AUTH_API_PREFIX = "/api/auth";
const STUDENT_API_PREFIX = "/api/Students";
const TEACHER_API_PREFIX = "/api/Teachers";

// Auth API
export const authApi = {
  registerAdmin: (data) => axios.post(`${AUTH_API_PREFIX}/register-admin`, data),
  registerTeacher: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-teacher`, data),
  registerParent: (data) =>
    axios.post(`${AUTH_API_PREFIX}/register-parent`, data),
  login: (data) => axios.post(`${AUTH_API_PREFIX}/login`, data),
};

// Academy API
export const academyApi = {
  getAcademyList: () => axios.get(`${ACADEMIES_API_PREFIX}`),
  getAcademyById: (id) => axios.get(`${ACADEMIES_API_PREFIX}/${id}`),
};

// Student API
export const studentApi = {
  // Talabalar ro'yxatini olish
  getStudentList: () => axios.get(`${STUDENT_API_PREFIX}`),
  
  // Talaba qo'shish (POST)
  postStudent: (data) => axios.post(`${STUDENT_API_PREFIX}`, data),
  
  // Bitta talabani olish
  getStudent: (id) => axios.get(`${STUDENT_API_PREFIX}/${id}`),
  
  // Talaba ma'lumotlarini yangilash (PATCH)
  updateStudent: (id, data) =>
    axios.patch(`${STUDENT_API_PREFIX}/${id}`, data),
  
  // Talabani o'chirish (DELETE)
  deleteStudent: (id) => axios.delete(`${STUDENT_API_PREFIX}/${id}`),
};

// Class API
export const classApi = {
  getClassList: () => axios.get(`${CLASS_API_PREFIX}`),
  postClass: (data) => axios.post(`${CLASS_API_PREFIX}`, data),
  deleteClass: (id) => axios.delete(`${CLASS_API_PREFIX}/${id}`),
};

// Teacher API
export const teacherApi = {
  // O'qituvchilar ro'yxatini olish
  getTeacherList: () => axios.get(`${TEACHER_API_PREFIX}`),
};
