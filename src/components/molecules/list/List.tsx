import styles from "./List.module.scss";
import Button from "@/components/atoms/button/Button";
import ListContent from "../listContent/ListContent";
import useDeleteToDo from "@/hooks/useDeleteToDo/useDeleteToDo";

interface IProps {
  toDo: IToDo;
}

function List({ toDo }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <ListContent toDo={toDo} />
        <Button
          content={"삭제"}
          variant="delete"
          type="button"
          onClick={useDeleteToDo(toDo.id)}
        />
      </div>
    </>
  );
}

export default List;
