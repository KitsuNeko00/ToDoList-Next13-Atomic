import { addToDoApi, deleteToDoApi, updateIsDonApi } from "@/api/home/home";
import { toDoKeys } from "@/constants/queryKeys";
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

interface IUseUpdateIsDoneMutation {
  mutateUpdateIsDone: ({ toDo, updatedIsDone }: IUpdateIsDoneProps) => void;
}

function useAddToDoMutation(): IUseAddToDoMutation {
  const queryClient = useQueryClient();
  const addToDoMutation = useMutation(addToDoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(toDoKeys.all);
    },
  });

  return {
    mutateAddToDo: addToDoMutation.mutate,
    isAddToDoLoading: addToDoMutation.isLoading,
    isAddToDoError: addToDoMutation.isError,
  };
}

function useDeleteToDoMutation(): IUseDeleteToDoMutation {
  const queryClient = useQueryClient();
  const deleteToDoMutation = useMutation(deleteToDoApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(toDoKeys.all);
    },
  });

  return {
    mutateDeleteToDo: deleteToDoMutation.mutate,
    isDeleteToDoLoading: deleteToDoMutation.isLoading,
    isDeleteToDoError: deleteToDoMutation.isError,
  };
}

function useUpdateIsDoneMutation(): IUseUpdateIsDoneMutation {
  const queryClient = useQueryClient();
  const updateIsDoneMutation = useMutation(updateIsDonApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(toDoKeys.all);
    },
  });

  return { mutateUpdateIsDone: updateIsDoneMutation.mutate };
}

export { useAddToDoMutation, useDeleteToDoMutation, useUpdateIsDoneMutation };
