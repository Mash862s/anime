import type { TraceResult } from "../Types/types";
import Card from "./Card";
import cl from "./CardList.module.css";
const CardList = ({ cards }: { cards: TraceResult[] }) => {
  console.log("нарисовался");

  return (
    <div className={cl.cardList}>
      {cards.map((card) => (
        <Card card={card} key={crypto.randomUUID()} />
      ))}
    </div>
  );
};

export default CardList;
