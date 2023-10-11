"use client";

import Main from "@/components/organisms/main/Main";
import CommonTemplate from "../common/CommonTemplate";
import useFilteredToDos from "@/hooks/useFilteredToDos/useFilteredToDos";

function DidNotYetTemplate(): JSX.Element {
  const { filteredToDos } = useFilteredToDos(false);
  return (
    <>
      <CommonTemplate>
        <Main title="한 일 목록" toDos={filteredToDos} />
      </CommonTemplate>
    </>
  );
}

export default DidNotYetTemplate;
