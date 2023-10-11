import { useGetToDosQuery } from "@/services/home/queries/useGetHomeQuery";

interface IUseDoneToDos {
  filteredToDos: IToDo[];
}

function useFilteredToDos(isDone: boolean): IUseDoneToDos {
  const { toDos } = useGetToDosQuery();
  const filteredToDos =
    toDos?.filter((toDo: IToDo) => toDo.isDone === isDone) || [];
  return { filteredToDos };
}

export default useFilteredToDos;
