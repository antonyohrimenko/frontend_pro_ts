import { useState, useEffect } from "react";
import styles from "./homework11.module.css";
import Loader from "../Homework08/Loader";
import MyButton from "../../components/myButton/MyButton";
import FactCard from "./FactCard"; // Импортируем компонент карточки

// Интерфейс для хранения фактов и изображений
interface IPhotoFact {
  fact: string;
  url: string;
}

export default function Lesson11(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photoFacts, setPhotoFacts] = useState<IPhotoFact[]>([]);

  // Асинхронная функция для получения факта и изображения
  const getFactAndPic = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const resFact = await fetch("https://catfact.ninja/fact");
      const dataFact = await resFact.json();

      const resPhoto = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const dataPhoto = await resPhoto.json();

      setPhotoFacts((prev) => [
        ...prev,
        { fact: dataFact.fact, url: dataPhoto[0].url },
      ]);
    } catch (error) {
      console.error("Error fetching cat fact or image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Загрузка первого факта при монтировании компонента
  useEffect(() => {
    getFactAndPic();
  }, []);

  // Функция для очистки всех данных
  const handleDelete = (): void => {
    setPhotoFacts([]);
  };

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson 11: Cat Facts 🐱</h2>

      {photoFacts.length > 0 && ( // Условный рендеринг контейнера (не хочу чтобы он при удалении данных оставался пустым
        // и занимал место на странице, это выглядит убого)
        <div className={styles.factsContainer}>
          {photoFacts.map((card, index) => (
            <FactCard key={index} fact={card.fact} url={card.url} />
          ))}
        </div>
      )}

      {isLoading && <Loader />}

      <div className={styles.buttonContainer}>
        <MyButton func={getFactAndPic} text="GET MORE INFO" />
        {photoFacts.length > 0 && (
          <MyButton func={handleDelete} text="DELETE ALL DATA" />
        )}
      </div>
    </div>
  );
}
