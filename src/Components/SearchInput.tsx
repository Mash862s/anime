import { useState, type ChangeEvent } from "react";
import cl from "./SearchInput.module.css";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>(
    "https://img.cdngos.com/v/250x350/anime/69/6999763623445633693096",
  );

  const [data, setData] = useState([]);

  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const getData = async (inputValue: string) => {
    try {
      if (!inputValue) {
        console.log("URL не может быть пустым");
        return;
      }

      console.log("Загружаю данные для:", inputValue);

      const response = await fetch(
        `https://api.trace.moe/search?url=${encodeURIComponent(inputValue)}`,
      );

      // Проверка статуса ответа
      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      console.log("Данные получены:", data);
      return data;
    } catch (error) {
      console.error("Ошибка в getData:", error);
    }
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
