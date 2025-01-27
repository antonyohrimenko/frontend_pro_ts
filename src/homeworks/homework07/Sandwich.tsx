import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./sandwich.css";

export default function Sandwich(): JSX.Element {
  const [ingredients, setIngredients] = useState<string[]>([]); // Массив ингредиентов
  // создали состояние с пустым массивом изначально типа "строка"

  // универсальная функция добавления ингридиента типа стринг, ничего не возвращает поэтому void
  const handleAddIngredient = (ingredient: string): void => {
    setIngredients((prev) => [...prev, ingredient]); // Добавляем новый ингредиент в массив
  };

  const handleReset = (): void => {
    setIngredients([]); // Очищаем массив ингредиентов
  };

  return (
    <div>
      <h2> Делаем простенький сендвич на хуках 🍔</h2>
      <img
        className="image"
        src="https://papparoti.ca/wp-content/uploads/2016/12/Sandwich-AvocadoBLT-1024x683.jpg"
        alt="Sandwich"
      />
      <p></p>
      <span>Добавили ингридиентов: {ingredients.join(" ")}</span>
      <p></p>
      <MyButton
        type="button"
        func={() => handleAddIngredient("🥩")}
        text="🥩"
      />
      <MyButton
        type="button"
        func={() => handleAddIngredient("🥒")}
        text="🥒"
      />
      <MyButton
        type="button"
        func={() => handleAddIngredient("🍅")}
        text="🍅"
      />
      <MyButton
        type="button"
        func={() => handleAddIngredient("🧅")}
        text="🧅"
      />
      <MyButton type="reset" func={handleReset} text="🔄" />
    </div>
  );
}
