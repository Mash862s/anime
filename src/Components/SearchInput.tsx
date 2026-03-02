import { useState, type ChangeEvent } from "react";
import cl from "./SearchInput.module.css";
import type { TraceResult } from "../Types/types";
import CustomInput from "../Ui/Inputs/CustomInput";
import CustomBtn from "../Ui/Buttons/CustomBtn";

interface SearchInputProps {
  getData: (inputValue: string) => Promise<TraceResult[]>;
  setModal: (value: boolean) => void;
}

const SearchInput = ({ getData, setModal }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    getData(inputValue);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className={cl.main}>
      <h1 className={cl.title}>Для поиска аниме вставьте ссылку!</h1>
      <div className={cl.heroArea}>
        <CustomInput
          getInputValue={getInputValue}
          placeholder="Вставьте ссылку"
        />
        <CustomBtn onClick={handleSearch}>Найти</CustomBtn>
      </div>
      <CustomBtn onClick={openModal} style={{ marginTop: "2rem" }}>
        Загрузите картинку
      </CustomBtn>
    </div>
  );
};

export default SearchInput;
