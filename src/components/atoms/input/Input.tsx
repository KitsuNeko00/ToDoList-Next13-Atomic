import styles from "./Input.module.scss";

interface IProps {
  placeholder: string;
}

function Input({ placeholder }: IProps): JSX.Element {
  return (
    <>
      <input placeholder={placeholder} className={styles.input} />
    </>
  );
}

export default Input;
