import { useEffect, useState } from "react";
import "./randomfox.css";
import MyButton from "../../components/myButton/MyButton";
import Loader from "./Loader";

export default function RandomFox(): JSX.Element {
  const [foxImage, setFoxImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // тут можно добавить интерфейс для входных данных с API
  // в задаче этого не было, не знаю нужно ли

  // получаем рандомную лису и "меняем состояние лоадеру"
  const fetchRandomFox = async (): Promise<void> => {
    // указал тип возвращаемого значения
    try {
      setIsLoading(true);
      const response = await fetch("https://randomfox.ca/floof/");
      const data = await response.json();
      setFoxImage(data.image);
    } catch (error) {
      console.error("Error fetching fox image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomFox();
  }, []);

  return (
    <div className="random-fox-container">
      <h2>Homework08. Random Fox 🦊</h2>

      {/* Сделал контейнер с фиксированной высотой, а то бесит что кнопка прыгает */}
      <div className="image-container">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="fox-wrapper">
            <img src={foxImage} alt="Random fox" />
          </div>
        )}
      </div>

      <MyButton text="Refresh 🔄" func={fetchRandomFox} />
    </div>
  );
}
