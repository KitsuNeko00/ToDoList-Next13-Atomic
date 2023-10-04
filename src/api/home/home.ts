import axios, { AxiosResponse } from "axios";

const getToDosApi = (): Promise<AxiosResponse> => {
  try {
    const response = axios.get("http://localhost:8080/todos");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getToDosApi };
