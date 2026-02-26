import cl from "./MySelect.module.css";

interface MySelectProps {
  defaultValue?: string;
  options: Array<{ value: string; name: string }>;
  value: string;
  onChange: (value: string) => void;
}

const MySelect = ({
  options,
  defaultValue,
  value,
  onChange,
}: MySelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cl.selected}
    >
      <option className={cl.option} disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option className={cl.option} key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
