import type { FC } from "react";
import cl from "./CustomBtn.module.css";
import type React from "react";

interface CustomBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleSearch?: () => void;
}

const CustomBtn: FC<CustomBtnProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.btn}>
      {children}
    </button>
  );
};

export default CustomBtn;
