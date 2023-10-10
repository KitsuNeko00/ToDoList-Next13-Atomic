import { useState } from "react";

interface IUseInput {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useInput(): IUseInput {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInputValue(value);
  };

  return { inputValue, setInputValue, handleInputChange };
}

export default useInput;
