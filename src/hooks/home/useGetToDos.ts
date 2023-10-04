import { useGetToDosQuery } from "@/services/home/useGetHomeQuery";

const useGetToDos = (): IGetToDos => {
  const { toDos, isToDosLoading, isToDosError }: IGetToDos = useGetToDosQuery();
  return { toDos, isToDosLoading, isToDosError };
};
export default useGetToDos;
