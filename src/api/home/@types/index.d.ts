interface IToDo {
  id: number;
  toDo: string;
  isDone: boolean;
}

interface IGetToDos {
  toDos: IToDo[] | undefined;
  isToDosLoading: boolean;
  isToDosError: boolean;
}
