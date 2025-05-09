import axios from "axios";
import { parseCookies } from "nookies";

// Base URL sozlamasi
axios.defaults.baseURL = "https://edc-test.ilmhub.uz"; // debug
axios.defaults.withCredentials = true;

// Interceptor — har bir so‘rovga token qo‘shish
axios.interceptors.request.use(
  (config) => {
    const { token } = parseCookies();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Axios interceptor failed:", error);
    return Promise.reject(error);
  }
);

// API prefixlar
const ACADEMIES_API_PREFIX = "/api/Academies";
const CLASS_API_PREFIX = "/api/Classes";
const AUTH_API_PREFIX = "/api/auth";
const STUDENT_API_PREFIX = "/api/Students";
const TEACHER_API_PREFIX = "/api/Teachers";
const PARENT_API_PREFIX = "/api/Parent";

// ====== Auth API ======
export const authApi = {
  registerAdmin: (data) => axios.post(`${AUTH_API_PREFIX}/register-admin`, data),
  registerTeacher: (data) => axios.post(`${AUTH_API_PREFIX}/register-teacher`, data),
  registerParent: (data) => axios.post(`${AUTH_API_PREFIX}/register-parent`, data),
  login: (data) => axios.post(`${AUTH_API_PREFIX}/login`, data),
  deleteTeacher: (id) => axios.delete(`${TEACHER_API_PREFIX}/${id}`),
};

// ====== Academy API ======
export const academyApi = {
  getAcademyList: () => axios.get(`${ACADEMIES_API_PREFIX}`),
  getAcademyById: (id) => axios.get(`${ACADEMIES_API_PREFIX}/${id}`),
};

// ====== Student API ======
export const studentApi = {
  getStudentList: () => axios.get(`${STUDENT_API_PREFIX}`),
  postStudent: (data) => axios.post(`${STUDENT_API_PREFIX}`, data),
  getStudent: (id) => axios.get(`${STUDENT_API_PREFIX}/${id}`),
  deleteStudent: (id) => axios.delete(`${STUDENT_API_PREFIX}/${id}`),
};

// ====== Class API ======
export const classApi = {
  getClassList: () => axios.get(`${CLASS_API_PREFIX}`),
  postClass: (data) => axios.post(`${CLASS_API_PREFIX}`, data),
  deleteClass: (id) => axios.delete(`${CLASS_API_PREFIX}/${id}`),
};

// ====== Teacher API ======
export const teacherApi = {
  getTeacherList: () => axios.get(`${TEACHER_API_PREFIX}`),
  registerTeacherAsync: () => axios.post(`${TEACHERS_TOKEN}`),
};

// Attendance API
export const attendanceApi = {
  postAttendance: (data) => axios.post(`${ATTENDANCE_API_PREFIX}`, data),
  getByClassAndDate: (classId, date) =>
    axios.get(`${ATTENDANCE_API_PREFIX}/${classId}/${date}`),
  getByStudentClassDate: (studentId, classId, date) =>
    axios.get(`${ATTENDANCE_API_PREFIX}/${studentId}/${classId}/${date}`),
  getAllByStudent: (studentId) =>
    axios.get(`${ATTENDANCE_API_PREFIX}/all/${studentId}`),
};

// ====== Parent API ======
// Nomi to‘g‘rilangan, chalkashlik yo‘q
export const parentApi = {
  getParentList: () => axios.get(`${PARENT_API_PREFIX}`),
  postParent: (data) => axios.post(`${PARENT_API_PREFIX}`, data),
};
