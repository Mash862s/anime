import cl from "./CustomInput.module.css";
const CustomInput = ({
  getInputValue,
  placeholder,
}: {
  getInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <input
      className={cl.customInput}
      onChange={getInputValue}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
