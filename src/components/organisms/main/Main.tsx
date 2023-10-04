"use client";

import List from "@/components/molecules/list/List";
import styles from "./Main.module.scss";
import useGetToDos from "@/hooks/home/useGetToDos";
import Title from "@/components/atoms/title/Title";

function Main(): JSX.Element {
  const { toDos } = useGetToDos();
  return (
    <>
      <Title title={"할 일 목록"} variant="small" />
      {toDos?.map((toDo) => (
        <List key={toDo.id} toDo={toDo} />
      ))}
    </>
  );
}

export default Main;
