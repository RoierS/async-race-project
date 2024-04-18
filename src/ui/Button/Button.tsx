import classNames from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: ButtonType;
  className?: string;
  purpose?: Variant;
  size?: "small" | "medium" | "large";
}

type Variant = "primary" | "secondary" | "start" | "stop" | "race";
type ButtonType = "button" | "submit" | "reset";

function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  className,
  purpose = "primary",
  size = "small",
}: ButtonProps) {
  const buttonClassName = classNames(
    styles.button,
    purpose && styles[purpose],
    size && styles[size],
    className,
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(className, buttonClassName)}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
