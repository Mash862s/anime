import cl from "./Loader.module.css";

const Loader = ({ message }: { message: string }) => (
  <div className={cl.loader}>
    <div className={cl.petals}>
      <div className={cl.petal} />
      <div className={cl.petal} />
      <div className={cl.petal} />
      <div className={cl.petal} />
      <div className={cl.petal} />
    </div>
    <span className={cl.loaderMessage}>{message}</span>
  </div>
);

export default Loader;
