import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import CardList from "./Components/CardList";
import Loader from "./Ui/Loader";
import type { TraceResponse, TraceResult } from "./Types/types";
import MySelect from "./Ui/MySelect";

const App = () => {
  const [data, setData] = useState<TraceResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchedRef = useRef(false); // ← флаг для проверки была ли вызвана функция getData
  const [selectedSort, setSelectedSort] = useState<string>("");
  // const [sortedArray, setSortedArray] = useState<TraceResult[] | void>([]);

  const myOptions = [
    { value: "filename", name: "📝По названию" },
    { value: "similarity", name: "⭐По совпадению" },
  ];

  const getData = async (inputValue: string): Promise<TraceResult[]> => {
    console.log("📞 getData вызвана");

    if (!inputValue.trim()) {
      alert("Пустое поле ввода");
      throw new Error("Пустое поле ввода");
    }
    try {
      const response = await fetch(
        `https://api.trace.moe/search?url=${encodeURIComponent(inputValue)}`,
      );

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const responseData: TraceResponse = await response.json();

      return responseData.result;
    } catch (error) {
      console.error("Ошибка в getData:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (fetchedRef.current) {
      return;
    }
    fetchedRef.current = true;
    const preLoadUrl =
      "https://media.2x2tv.ru/content/images/2024/08/728x410_1_f593b2558bb764351fd07c792cf781db@1280x720_0xil9PEXoj_8657154812090948501.png";
    const preLoad = async () => {
      const result = await getData(preLoadUrl);
      setIsLoading(false);
      setData(result);
    };
    preLoad();
  }, []);

  const sortedCard = () => (sort: string) => {
    console.log("отработала");

    setSelectedSort(sort);
    if (sort === "filename" || sort === "similarity") {
      setData(
        [...data].sort((a, b) => {
          if (sort === "filename") {
            return a.filename.localeCompare(b.filename);
          } else {
            return String(b.similarity).localeCompare(String(a.similarity));
          }
        }),
      );
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchInput getData={getData} />
      {isLoading ? null : (
        <MySelect
          defaultValue="Сортировка"
          options={myOptions}
          onChange={sortedCard}
          value={selectedSort}
        />
      )}

      {isLoading ? (
        <Loader message="Ищем совпадения..." />
      ) : (
        <CardList cards={data} />
      )}
    </div>
  );
};

export default App;
