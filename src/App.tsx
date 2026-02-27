import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import type { TraceResult } from "./Types/types";
import { getDataCards } from "./func/getDataCards";
import Main from "./Components/Main";

const App = () => {
  const [data, setData] = useState<TraceResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchedRef = useRef(false); // ← флаг для проверки была ли вызвана функция getData
  const [selectedSort, setSelectedSort] = useState<string>("");

  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (fetchedRef.current) {
      return;
    }
    fetchedRef.current = true;
    const preLoadUrl =
      "https://media.2x2tv.ru/content/images/2024/08/728x410_1_f593b2558bb764351fd07c792cf781db@1280x720_0xil9PEXoj_8657154812090948501.png";
    const preLoad = async () => {
      const result = await getDataCards(preLoadUrl);
      setIsLoading(false);
      setData(result);
    };
    preLoad();
  }, []);

  return (
    <div className="app">
      <Header />
      {
        <div>
          <h1 style={{ fontSize: "4rem" }}>{counter}</h1>
          <button onClick={() => setCounter(counter + 1)}>test</button>
        </div>
      }

      <Main
        isLoading={isLoading}
        data={data}
        selectedSort={selectedSort}
        setData={setData}
        setSelectedSort={setSelectedSort}
      />
    </div>
  );
};

export default App;
