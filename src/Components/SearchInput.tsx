import { useState, type ChangeEvent } from "react";
import cl from "./SearchInput.module.css";
import type { TraceResult } from "../App";

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
    <main className={cl.main}>
      <h1 className={cl.title}>Для поиска аниме вставьте ссылку!</h1>
      <div className={cl.heroArea}>
        <input
          className={cl.searchInput}
          onChange={getInputValue}
          type="text"
          name=""
          id=""
          placeholder="Ваша ссылка"
        />
        <button onClick={handleSearch} className={cl.btn}>
          Найти
        </button>
      </div>
    </main>
  );
};

export default SearchInput;
