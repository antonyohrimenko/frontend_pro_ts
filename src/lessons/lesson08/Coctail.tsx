import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";

export default function Coctail(): JSX.Element {
  // Task #1

  // Создать компонент Coctail.tsx и отрисовать как минимум два ключа :
  // - Название коктейля
  // Фото напитка
  // https://www.thecocktaildb.com/api/json/v1/1/random.php
  // ИСпользовать useEffect   только для первой отрисовки

  // создадим 2 переменные состояния
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const fetchCocktail = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cocktail data");
      }
      const data = await response.json();
      const cocktail = data.drinks[0]; // Данные о коктейле находятся в массиве drinks
      setTitle(cocktail.strDrink); // Устанавливаем название коктейля
      setImage(cocktail.strDrinkThumb); // Устанавливаем URL изображения
    } catch (error) {
      console.error("Error fetching cocktail:", error);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <div>
      <h2> Consultation task1 </h2>
      <h3> {title}</h3>
      <img src={image} alt="randomImage" />
      {/* <MyButton text="Refresh" func={fetchCocktail} /> */}
    </div>
  );
}
