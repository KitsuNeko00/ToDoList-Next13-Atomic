import { useDeleteToDoMutation } from "@/services/home/mutations/useHomeMutations";

interface IUseDeleteToDo {
  handleDeleteToDo: (id: string) => void;
}

function useDeleteToDo(): IUseDeleteToDo {
  const { mutateDeleteToDo } = useDeleteToDoMutation();

  const handleDeleteToDo = (id: string): void => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    } else {
      alert("취소합니다.");
      return;
    }
    mutateDeleteToDo(id);
  };

  return { handleDeleteToDo };
}

export default useDeleteToDo;
