import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

// REQUEST INTERCEPTOR (token auto attach)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;
    const token = localStorage.getItem("token");

    // ONLY LOGOUT IF USER WAS LOGGED IN
    if (status === 401 && token) {
      console.log("Token expired → logging out");

      localStorage.removeItem("token");
      localStorage.removeItem("role");

      window.location.href = "/login";
    }

    return Promise.reject(err);
  }
);

export default api;