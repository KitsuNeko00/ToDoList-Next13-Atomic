import List from "@/components/molecules/list/List";
import styles from "./Main.module.scss";

interface IProps {
  children: React.ReactNode;
}

function Main(): JSX.Element {
  return (
    <>
      <List />
    </>
  );
}

export default Main;
