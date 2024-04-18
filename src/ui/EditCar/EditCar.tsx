import { useState } from "react";

import { defaultCarColor } from "@constants/constants";
import Button from "@ui/Button/Button";

import Input from "@ui/Input/Input";

import styles from "./EditCar.module.css";

function EditCar() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(defaultCarColor);

  const handleClick = () => {
    // ToDO : Add logic
  };

  return (
    <form className={styles.editCar}>
      <Input
        type="text"
        placeholder="Car Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <Button type="button" onClick={handleClick} size="medium">
        Update
      </Button>
    </form>
  );
}

export default EditCar;
