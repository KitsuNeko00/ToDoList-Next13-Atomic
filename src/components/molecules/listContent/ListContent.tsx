"use client";

import useGetToDos from "@/hooks/home/useGetToDos";
import styles from "./ListContent.module.scss";
interface IProps {
  toDo: IToDo;
}

function ListContent({ toDo }: IProps): JSX.Element {
  const { toDos }: IGetToDos = useGetToDos();
  console.log("toDOs :", toDos);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>To do</div>
          <div>{toDo.toDo}</div>
        </div>
      </div>
    </>
  );
}

export default ListContent;
