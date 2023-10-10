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

const addToDoApi = (addToDoformData: string): Promise<AxiosResponse> => {
  try {
    const data = {
      toDo: addToDoformData,
      isDone: false,
    };
    const response = axios.post("http://localhost:8080/todos", data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getToDosApi, addToDoApi };
