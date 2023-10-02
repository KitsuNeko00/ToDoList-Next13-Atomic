import styles from "./ListContent.module.scss";

function ListContent(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.date}>날짜: </div>
          <div>Next.Js 공부 하기</div>
        </div>
      </div>
    </>
  );
}

export default ListContent;
