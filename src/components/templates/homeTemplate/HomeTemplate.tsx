import Form from "@/components/molecules/form/Form";
import Main from "../../organisms/main/Main";
import styles from "./HomeTemplate.module.scss";

function HomeTemplate(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Form />
          <Main />
        </div>
      </div>
    </>
  );
}

export default HomeTemplate;
