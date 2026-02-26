import { getTime } from "../func/getTime";
import type { TraceResult } from "../Types/types";
import cl from "./Card.module.css";

const Card = ({ card }: { card: TraceResult }) => {
  return (
    <div className={cl.card}>
      <img src={card.image} alt="" className={cl.cardImg} />
      <div className={cl.cardTitle}> Название аниме: {card.filename}</div>
      <div className={cl.cardEpisode}>Эпизод №{card.episode}</div>
      <div className={cl.cardDuration}>
        Длительность эпизода {getTime(card.duration).minute} минут,{" "}
        {getTime(card.duration).formattedSeconds} секунд
      </div>
      <div className={cl.cardFind}>
        Начало сцены:{" "}
        <span style={{ color: "#6b8cff" }}>
          {getTime(card.at).minute}:{getTime(card.at).formattedSeconds}
        </span>
      </div>
      <div className={cl.cardSimilarity}>
        Вероятность совпадения{" "}
        <span style={{ fontSize: "2rem", color: "red" }}>
          {Math.floor(card.similarity * 100)} %
        </span>
      </div>
      <div>
        Посмотреть момент:{" "}
        <button>
          <a href={card.video}>Смотреть</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
