import styles from "./Button.module.scss";

interface IProps {
  content: string;
  variant?: "create" | "delete";
}

function Button({ content, variant }: IProps): JSX.Element {
  let buttonClass;
  if (variant === "create") {
    buttonClass = styles.createButton;
  } else if (variant === "delete") {
    buttonClass = styles.deleteButton;
  }

  return (
    <>
      <button className={buttonClass}>{content}</button>
    </>
  );
}

export default Button;
