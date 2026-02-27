import CustomBtn from "../Ui/Buttons/CustomBtn";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.title}>ANIME SEARCH</div>
      <CustomBtn>Login</CustomBtn>
    </header>
  );
};

export default Header;
