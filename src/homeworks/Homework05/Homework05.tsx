import { useState } from "react";
import styles from "./homework05.module.css";

type ColorType = "black" | "red" | "green" | "blue";

export default function Homework04_01(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [color, setColor] = useState<ColorType>("black");

  const handlePlus = () => setCount((prev) => prev + 1);
  const handleMinus = () => setCount((prev) => prev - 1);
  const handleSwitcher = () => setIsVisible((prev) => !prev);
  const changeColor = (newColor: ColorType) => setColor(newColor);

  return (
    <div>
      <h2>Homework 04. UseState() Hook 🪝🦦</h2>

      <div>
        <button className={styles.button} onClick={handleSwitcher}>
          👉 {isVisible ? "Hide counter" : "Show counter"} 👈
        </button>
      </div>

      {isVisible && (
        <div className={`${styles.counter} ${styles[color]}`}>
          <button className={styles.button} onClick={handleMinus}>-</button>
          <span>{count}</span>
          <button className={styles.button} onClick={handlePlus}>+</button>
        </div>
      )}

      <button className={`${styles.button} ${styles.red}`} onClick={() => changeColor("red")}>
        Red
      </button>
      <button className={`${styles.button} ${styles.green}`} onClick={() => changeColor("green")}>
        Green
      </button>
      <button className={`${styles.button} ${styles.blue}`} onClick={() => changeColor("blue")}>
        Blue
      </button>
    </div>
  );
}
