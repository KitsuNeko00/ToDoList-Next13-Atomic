import styles from "./Title.module.scss";

interface IProps {
  title: string;
  variant?: "big" | "small";
}

function Title({ title, variant }: IProps): JSX.Element {
  let titleClass;
  
  if (variant === "big") {
    titleClass = styles.bigTitle;
  } else if (variant === "small") {
    titleClass = styles.smallTitle;
  }

  return <h1 className={titleClass}>{title}</h1>;
}

export default Title;
