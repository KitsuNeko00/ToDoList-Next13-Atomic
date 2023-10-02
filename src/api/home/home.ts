import axios, { AxiosResponse } from "axios";

const addToDoApi = (): Promise<AxiosResponse> => {
  try {
    const response = axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { addToDoApi };
