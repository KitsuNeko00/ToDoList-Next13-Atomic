import styles from "./Input.module.scss";

interface IProps {
  placeholder: string;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder,
  inputValue,
  handleInputChange,
}: IProps): JSX.Element {
  console.log("inputValues: ", inputValue);

  return (
    <>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className={styles.input}
      />
    </>
  );
}

export default Input;
