import { useGetToDosQuery } from "@/services/home/queries/useGetHomeQuery";

interface IUseDoneToDos {
  doneToDos: IToDo[];
}

function useDoneToDos(): IUseDoneToDos {
  const { toDos } = useGetToDosQuery();
  const doneToDos =
    toDos?.filter((toDo: IToDo) => {
      return toDo.isDone === true;
    }) || [];
  return { doneToDos };
}

export { useDoneToDos };
