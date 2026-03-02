import type { FC } from "react";
import cl from "./Modal.module.css";

interface ModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
