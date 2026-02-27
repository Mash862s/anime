import type { FC } from "react";
import cl from "./CustomBtn.module.css";
import type React from "react";

interface CustomBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleSearch?: () => void;
}

const CustomBtn: FC<CustomBtnProps> = ({
  handleSearch,
  children,
  ...props
}) => {
  return (
    <button {...props} onClick={handleSearch} className={cl.btn}>
      {children}
    </button>
  );
};

export default CustomBtn;
