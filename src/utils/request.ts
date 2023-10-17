import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const apiInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/toDos",
});
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiInstance;
