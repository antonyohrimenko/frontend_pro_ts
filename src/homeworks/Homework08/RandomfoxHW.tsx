import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import Loader from "./Loader";
import styles from "./randomfox.module.css";

export default function RandomFoxHW(): JSX.Element {
  const [foxImage, setFoxImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // тут можно добавить интерфейс для входных данных с API
  // в задаче этого не было, не знаю нужно ли

  interface IFoxResponse {
    image: string;
    link: string;
  }

  // получаем рандомную лису и "меняем состояние лоадеру"
  const fetchRandomFox = async (): Promise<void> => {
    // указал тип возвращаемого значения
    try {
      setIsLoading(true);
      const response = await fetch("https://randomfox.ca/floof/");
      const data: IFoxResponse = await response.json();
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
    <div className={styles.randomFoxContainer}>
      <h2>Homework08. Random Fox 🦊</h2>

      {/* Сделал контейнер с фиксированной высотой, а то бесит что кнопка прыгает */}
      <div className={styles.imageContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.foxWrapper}>
            <img src={foxImage} alt="Random fox" />
          </div>
        )}
      </div>

      <MyButton text="Refresh 🔄" func={fetchRandomFox} />
    </div>
  );
}
