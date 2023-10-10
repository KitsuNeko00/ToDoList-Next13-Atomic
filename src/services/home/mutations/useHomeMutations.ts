import { addToDoApi } from "@/api/home/home";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUseAddToDoMutation {
  mutateAddToDo: (addToDoformData: string) => void;
  isLoadingAddToDo: boolean;
  isAddToDoError: boolean;
}

function useAddToDoMutation(): IUseAddToDoMutation {
  const queryClient = useQueryClient();
  const addToDosMutation = useMutation({
    mutationFn: (addToDoformData: string) => {
      return addToDoApi(addToDoformData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
  });

  const mutateAddToDo = addToDosMutation.mutate;
  const isLoadingAddToDo = addToDosMutation.isLoading;
  const isAddToDoError = addToDosMutation.isError;

  return { mutateAddToDo, isLoadingAddToDo, isAddToDoError };
}

export { useAddToDoMutation };
