import type { TraceResult } from "../App";
import Card from "./Card";
import cl from "./CardList.module.css";
const CardList = ({ cards }: { cards: TraceResult[] }) => {
  return (
    <div className={cl.cardList}>
      {cards.map((card) => (
        <Card card={card} key={crypto.randomUUID()} />
      ))}
    </div>
  );
};

export default CardList;
