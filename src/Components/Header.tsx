import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.title}>ANIME SEARCH</div>
      <button className={cl.btn}>Login</button>
    </header>
  );
};

export default Header;
