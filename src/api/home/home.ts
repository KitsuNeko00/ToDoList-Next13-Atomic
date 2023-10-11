import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8080/todos";

const getToDosApi = (): Promise<AxiosResponse> => {
  try {
    const response = axios.get(BASE_URL);
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
    const response = axios.post(BASE_URL, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteToDoApi = (id: string): Promise<AxiosResponse> => {
  try {
    const response = axios.delete(BASE_URL + "/" + id);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateIsDonApi = ({
  toDo,
  updatedIsDone,
}: IUpdateIsDoneProps): Promise<AxiosResponse> => {
  try {
    const data = {
      ...toDo,
      isDone: updatedIsDone,
    };
    const response = axios.put(`http://localhost:8080/todos/${toDo.id}`, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getToDosApi, addToDoApi, deleteToDoApi, updateIsDonApi };
