import axios from "axios";

const api = axios.create({ baseURL: "/" });

api.interceptors.request.use(
  (request) => {
    request.headers.set("Content-Type", "application/json");

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiRequest = async (
  url = "",
  method: string,
  data: any = null
) => {
  return await api({ url, method, data });
};
