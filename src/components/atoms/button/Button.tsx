import styles from "./Button.module.scss";

interface IProps {
  content: string;
  variant?: "create" | "delete";
  type: "button" | "submit" | "reset" | undefined;
  onClick: any;
}

function Button({ content, variant, type, onClick }: IProps): JSX.Element {
  let buttonClass;
  if (variant === "create") {
    buttonClass = styles.createButton;
  } else if (variant === "delete") {
    buttonClass = styles.deleteButton;
  }

  return (
    <>
      <button type={type} className={buttonClass} onClick={onClick}>
        {content}
      </button>
    </>
  );
}

export default Button;
