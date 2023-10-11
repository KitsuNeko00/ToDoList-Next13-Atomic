import { useUpdateIsDoneMutation } from "@/services/home/mutations/useHomeMutations";
import { useState } from "react";

interface IUseHandleIsDoneChange {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function useHandleIsDoneChange(toDo: IToDo): IUseHandleIsDoneChange {
  const [checked, setChecked] = useState<boolean>(toDo.isDone);
  const { mutateUpdateIsDone } = useUpdateIsDoneMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedIsDone = event.target.checked;
    setChecked(updatedIsDone);

    const data = {
      toDo,
      updatedIsDone,
    };

    mutateUpdateIsDone(data);
  };
  return { checked, handleChange };
}

export default useHandleIsDoneChange;
