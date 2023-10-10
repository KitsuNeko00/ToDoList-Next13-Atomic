import { addToDoApi, deleteToDoApi } from "@/api/home/home";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUseAddToDoMutation {
  mutateAddToDo: (addToDoformData: string) => void;
  isAddToDoLoading: boolean;
  isAddToDoError: boolean;
}

interface IUseDeleteToDoMutation {
  mutateDeleteToDo: (id: string) => void;
  isDeleteToDoLoading: boolean;
  isDeleteToDoError: boolean;
}

function useAddToDoMutation(): IUseAddToDoMutation {
  const queryClient = useQueryClient();
  const addToDoMutation = useMutation({
    mutationFn: (addToDoformData: string) => {
      return addToDoApi(addToDoformData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
  });

  const mutateAddToDo = addToDoMutation.mutate;
  const isAddToDoLoading = addToDoMutation.isLoading;
  const isAddToDoError = addToDoMutation.isError;

  return { mutateAddToDo, isAddToDoLoading, isAddToDoError };
}

function useDeleteToDoMutation(): IUseDeleteToDoMutation {
  const queryClient = useQueryClient();
  const deleteToDoMutation = useMutation({
    mutationFn: (id: string) => {
      return deleteToDoApi(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    },
  });

  const mutateDeleteToDo = deleteToDoMutation.mutate;
  const isDeleteToDoLoading = deleteToDoMutation.isLoading;
  const isDeleteToDoError = deleteToDoMutation.isError;

  return { mutateDeleteToDo, isDeleteToDoLoading, isDeleteToDoError };
}

export { useAddToDoMutation, useDeleteToDoMutation };
