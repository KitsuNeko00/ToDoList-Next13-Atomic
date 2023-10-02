import Header from "../organisms/header/Header";
import Main from "../organisms/main/Main";
import styles from "./Template.module.scss";

function Template(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default Template;
