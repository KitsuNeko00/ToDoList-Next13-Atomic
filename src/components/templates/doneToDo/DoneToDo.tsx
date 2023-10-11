"use client";

import Main from "@/components/organisms/main/Main";
import CommonTemplate from "../common/CommonTemplate";
import { useDoneToDos } from "@/hooks/useToDos/useToDos";

function DoneToDoTemplate(): JSX.Element {
  const { doneToDos } = useDoneToDos();

  return (
    <>
      <CommonTemplate>
        <Main title="한 일 목록" toDos={doneToDos} />
      </CommonTemplate>
    </>
  );
}

export default DoneToDoTemplate;
