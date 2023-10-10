"use client";

import Button from "@/components/atoms/button/Button";
import Input from "@/components/atoms/input/Input";
import styles from "./Form.module.scss";
import Title from "@/components/atoms/title/Title";
import useInput from "@/hooks/useInput/useInput";
import useForm from "@/hooks/useForm/useForm";

function Form(): JSX.Element {
  const { inputValue, setInputValue, handleInputChange } = useInput();
  const { handleSubmit } = useForm(inputValue, setInputValue);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.label}>
        <Title title={"할 일을 입력해주세요."} variant="small" />
      </div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <Input
            placeholder={"할 일을 입력해주세요..."}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
          <Button content={"할 일 추가"} variant="create" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default Form;
