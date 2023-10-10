import { useAddToDoMutation } from "@/services/home/mutations/useHomeMutations";

interface IUseForm {
  handleSubmit: (e: React.FormEvent) => void;
}

function useForm(
  inputValue: string,
  setInputValue: (inputValue: string) => void
): IUseForm {
  const { mutateAddToDo } = useAddToDoMutation();
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const addToDoFormData = inputValue;

    if (addToDoFormData === "") {
      alert("할일을 입력해주세요.");
      return;
    }

    if (window.confirm("업로드 하시겠습니까?")) {
      alert("업로드 되었습니다.");
    } else {
      alert("취소합니다.");
      return;
    }

    mutateAddToDo(addToDoFormData);
    setInputValue("");
  };
  return { handleSubmit };
}

export default useForm;
