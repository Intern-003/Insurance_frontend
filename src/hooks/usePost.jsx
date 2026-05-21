import { useState } from "react";
import api from "../api/axios";

export function usePost(defaultEndpoint = "") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (body, endpoint = "", options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const finalEndpoint = endpoint || defaultEndpoint;

      const headers = {};

      if (!(body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
      }

      const response = await api.post(finalEndpoint, body, { headers });

      setData(response.data);
      return response.data;
    } catch (err) {
      console.log("API ERROR:", err.response?.data);

      const errData = err.response?.data || "Something went wrong";
      setError(errData);
      throw errData;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute, setError };
}
