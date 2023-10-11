import styles from "./CommonTemplate.module.scss";

interface IProps {
  children: React.ReactNode;
}

function CommonTemplate({ children }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
}

export default CommonTemplate;

