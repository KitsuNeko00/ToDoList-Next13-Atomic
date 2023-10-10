import { useDeleteToDoMutation } from "@/services/home/mutations/useHomeMutations";

function useDeleteToDo(id: string): () => void {
  const { mutateDeleteToDo } = useDeleteToDoMutation();
  return () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
      mutateDeleteToDo(id);
    } else {
      alert("취소합니다.");
      return;
    }
  };
}

export default useDeleteToDo;
