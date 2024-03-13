import { getToDosApi } from "@/api/home/home";
import { toDoKeys } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

function useGetToDosQuery(): IGetToDos {
  const getToDosQueryResult = useQuery({
    queryKey: toDoKeys.all,
    queryFn: getToDosApi,
  });

  return {
    toDos: getToDosQueryResult.data?.data,
    isToDosLoading: getToDosQueryResult.isLoading,
    isToDosError: getToDosQueryResult.isError,
  };
}

export { useGetToDosQuery };
