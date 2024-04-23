import classNames from "classnames";

import styles from "./Input.module.css";

interface InputProps {
  type?: "text" | "color";
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function Input({
  type = "text",
  placeholder = "Car Name",
  onChange,
  value,
}: InputProps) {
  const inputClass = classNames(styles.input, {
    [styles.textInput]: type === "text",
    [styles.colorInput]: type === "color",
  });

  return (
    <input
      className={inputClass}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
