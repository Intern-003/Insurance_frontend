// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// // REQUEST INTERCEPTOR (token auto attach)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     const status = err.response?.status;
//     const token = localStorage.getItem("token");

//     // ONLY LOGOUT IF USER WAS LOGGED IN
//     if (status === 401 && token) {
//       console.log("Token expired → logging out");

//       localStorage.removeItem("token");
//       localStorage.removeItem("role");

//       window.location.href = "/login";
//     }

//     return Promise.reject(err);
//   }
// );

// export default api;
// api/axios.js
// api/axios.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

// Request interceptor - attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default api;