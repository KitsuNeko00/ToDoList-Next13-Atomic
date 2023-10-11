import { getToDosApi } from "@/api/home/home";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

function useGetToDosQuery(): IGetToDos {
  const getToDosQueryResult = useQuery({
    queryKey: QUERY_KEYS.TODOS,
    queryFn: () => {
      return getToDosApi();
    },
  });
  const toDos = getToDosQueryResult.data?.data;
  const isToDosLoading = getToDosQueryResult.isLoading;
  const isToDosError = getToDosQueryResult.isError;
  return { toDos, isToDosLoading, isToDosError };
}

export { useGetToDosQuery };
