import { useState, type ChangeEvent } from "react";
import cl from "./SearchInput.module.css";
import type { TraceResult } from "../Types/types";
import CustomInput from "../Ui/Inputs/CustomInput";
import CustomBtn from "../Ui/Buttons/CustomBtn";

interface SearchInputProps {
  getData: (inputValue: string) => Promise<TraceResult[]>;
}

const SearchInput = ({ getData }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    getData(inputValue);
  };

  return (
    <div className={cl.main}>
      <h1 className={cl.title}>Для поиска аниме вставьте ссылку!</h1>
      <div className={cl.heroArea}>
        <CustomInput
          getInputValue={getInputValue}
          placeholder="Вставьте ссылку"
        />
        <CustomBtn handleSearch={handleSearch}>Найти</CustomBtn>
      </div>
      <CustomBtn style={{ marginTop: "2rem" }}>Загрузите картинку</CustomBtn>
    </div>
  );
};

export default SearchInput;
