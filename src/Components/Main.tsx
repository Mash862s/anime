import { getDataCards } from "../func/getDataCards";
import type { TraceResult } from "../Types/types";
import MySelect from "../Ui/Select/MySelect";
import Loader from "../Ui/Loader/Loader";
import CardList from "./CardList";
import SearchInput from "./SearchInput";

interface MainProps {
  isLoading: boolean;
  setSelectedSort: (sort: string) => void;
  data: TraceResult[];
  selectedSort: string;
  setData: (data: TraceResult[]) => void;
  setModal: (value: boolean) => void;
}

const Main = ({
  isLoading,
  setSelectedSort,
  setData,
  data,
  selectedSort,
  setModal,
}: MainProps) => {
  const myOptions = [
    { value: "filename", name: "📝По названию" },
    { value: "similarity", name: "⭐По совпадению" },
  ];

  const sortedCard = (sort: string) => {
    console.log("сортировка по:", sort);
    setSelectedSort(sort);

    if (sort === "filename") {
      setData([...data].sort((a, b) => a.filename.localeCompare(b.filename)));
    } else if (sort === "similarity") {
      setData([...data].sort((a, b) => b.similarity - a.similarity));
    }
  };
  return (
    <main>
      <SearchInput setModal={setModal} getData={getDataCards} />
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
    </main>
  );
};

export default Main;
