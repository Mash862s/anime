import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import CardList from "./Components/CardList";
import Loader from "./Ui/Loader";
// import Loader from "./Ui/Loader";

export interface TraceResult {
  anilist: number;
  at: number;
  duration: number;
  episode: number | null;
  filename: string;
  from: number;
  image: string;
  similarity: number;
  to: number;
  video?: string;
}

interface TraceResponse {
  frameCount: number;
  error: string;
  result: TraceResult[];
}

const App = () => {
  const [data, setData] = useState<TraceResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(data);

  const getData = async (inputValue: string): Promise<TraceResult[]> => {
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
      setData(responseData.result);
      return responseData.result;
    } catch (error) {
      console.error("Ошибка в getData:", error);
      throw error;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const preLoadUrl =
      "https://media.2x2tv.ru/content/images/2024/08/728x410_1_f593b2558bb764351fd07c792cf781db@1280x720_0xil9PEXoj_8657154812090948501.png";
    const preLoad = async () => {
      const result = await getData(preLoadUrl);
      setIsLoading(false);
      setData(result);
    };
    preLoad();
  }, []);

  console.log(isLoading);

  return (
    <div className="app">
      <Header />
      <SearchInput getData={getData} />
      {isLoading ? (
        <Loader message="Ищем совпадения..." />
      ) : (
        <CardList cards={data} />
      )}
    </div>
  );
};

export default App;
