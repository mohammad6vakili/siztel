import axios from "axios";
import { message } from "antd";

const useHttp = () => {
  const httpService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      // Accept: "application/json",
    },
  });

  httpService.interceptors.response.use(
    (response) => response,
    async ({ error, response }) => {
      message.error("Server Error!");
    }
  );

  const exports = { httpService };

  return exports;
};

export default useHttp;
