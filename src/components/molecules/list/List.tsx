import Main from "@/components/organisms/main/Main";
import styles from "./List.module.scss";
import Title from "@/components/atoms/title/Title";
import Button from "@/components/atoms/button/Button";
import ListContent from "@/components/atoms/listContent/ListContent";

function List(): JSX.Element {
  return (
    <>
      <Title title={"할 일 목록"} variant="small" />
      <div className={styles.container}>
        <ListContent />
        <Button content={"삭제"} variant="delete" />
      </div>
    </>
  );
}

export default List;
