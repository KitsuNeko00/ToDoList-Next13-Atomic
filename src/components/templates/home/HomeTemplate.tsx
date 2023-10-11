"use client";

import Form from "@/components/molecules/form/Form";
import Main from "../../organisms/main/Main";
import CommonTemplate from "../common/CommonTemplate";
import { useGetToDosQuery } from "@/services/home/queries/useGetHomeQuery";

function HomeTemplate(): JSX.Element {
  const { toDos } = useGetToDosQuery();
  return (
    <>
      <CommonTemplate>
        <Form />
        <Main title="전체 목록" toDos={toDos} />
      </CommonTemplate>
    </>
  );
}

export default HomeTemplate;
