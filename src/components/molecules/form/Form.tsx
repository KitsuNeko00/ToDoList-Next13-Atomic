import Button from "@/components/atoms/button/Button";
import Input from "@/components/atoms/input/Input";
import styles from "./Form.module.scss";
import Title from "@/components/atoms/title/Title";

function Form(): JSX.Element {
  return (
    <>
      <div className={styles.label}>
        <Title title={"할 일을 입력해주세요."} variant="small" />
      </div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <Input placeholder={"할 일을 입력해주세요..."} />
          <Button content={"할 일 추가"} variant="create" />
        </div>
      </div>
    </>
  );
}

export default Form;
