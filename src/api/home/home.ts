import apiInstance from "@/utils/request";
import { AxiosResponse } from "axios";

const getToDosApi = (): Promise<AxiosResponse> => {
  return apiInstance.get("/");
};

const addToDoApi = (addToDoformData: string): Promise<AxiosResponse> => {
  const data = {
    toDo: addToDoformData,
    isDone: false,
  };
  return apiInstance.post("/", data);
};

const deleteToDoApi = (id: string): Promise<AxiosResponse> => {
  return apiInstance.delete(`/${id}`);
};

const updateIsDonApi = ({
  toDo,
  updatedIsDone,
}: IUpdateIsDoneProps): Promise<AxiosResponse> => {
  const data = {
    ...toDo,
    isDone: updatedIsDone,
  };
  return apiInstance.put(`/${toDo.id}`, data);
};

export { getToDosApi, addToDoApi, deleteToDoApi, updateIsDonApi };
