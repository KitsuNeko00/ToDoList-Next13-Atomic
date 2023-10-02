import Title from "@/components/atoms/title/Title";
import Form from "@/components/molecules/form/Form";

function Header(): JSX.Element {
  return (
    <>
      <Title title={"To do list"} variant="big" />
      <Form />
    </>
  );
}

export default Header;
