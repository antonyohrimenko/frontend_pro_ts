// Используем хуки
import "./lesson04.css";
import { useState } from "react";

export default function Lesson04(): JSX.Element {
  const [count, setCount] = useState<number>(1);

  const handlePlus = (): void => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = (): void => {
    setCount((prev) => prev - 1);
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleSwitcher = (): void => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <h2>UseStete() Hook 🦦 🪝</h2>
      <p>
        {" "}
        Чтобы при изменении переменной как в примере ниже мы видели результат
        обновления не достаточно обычноый переменной. Нужно использовать
        специальную переменную состояния. UseState() из React библиотеки.
      </p>
      <div>
        <button onClick={handleSwitcher}>
          {" "}
          👉 {isVisible ? "Hide counter" : "Show counter"} 👈{" "}
        </button>
      </div>

      {/* Если в левой части будет true то отобрази то что после &&  */}
      {isVisible && (
        <div className="counter">
          <p>Этот счетчик сделан с помощью UseState()</p>
          <button onClick={handleMinus}> - </button>
          <span> {count} </span>
          <button onClick={handlePlus}> + </button>
        </div>
      )}

      <button> Red </button>
      <button> Green </button>
      <button> Blue </button>
    </div>
  );
}
