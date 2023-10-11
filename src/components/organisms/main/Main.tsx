"use client";

import React from "react";
import List from "@/components/molecules/list/List";
import styles from "./Main.module.scss";
import Title from "@/components/atoms/title/Title";
import Loading from "@/components/common/loading/Loading";
import { useGetToDosQuery } from "@/services/home/queries/useGetHomeQuery";

interface MainProps {
  title: string;
  toDos: IToDo[] | undefined;
}

function Main({ title, toDos }: MainProps): JSX.Element {
  const { isToDosLoading, isToDosError } = useGetToDosQuery();

  if (isToDosError) {
    return (
      <p className={styles.errorText}>
        에러가 발생했습니다. 다시 시도해주세요...
      </p>
    );
  }

  if (!isToDosLoading && toDos && toDos.length === 0) {
    return <p className={styles.nothing}>한 일이 없어요...</p>;
  }

  return (
    <>
      {isToDosLoading ? <Loading /> : null}
      {!isToDosLoading && <Title title={title} variant="small" />}
      {toDos?.map((toDo) => (
        <List key={toDo.id} toDo={toDo} />
      ))}
    </>
  );
}

export default Main;
