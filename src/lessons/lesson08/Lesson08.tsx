import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import Lesson05 from "../lesson05/Lesson05";
import styles from './lesson08.module.css';

export default function Lesson08(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);
  const [dogImg, setDogImg] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleToggle = (): void => {
    setToggle(prev => !prev);
  };

  const handleCount = (): void => {
    setCount(prev => prev + 1);
  };

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error(`Error is ${response.status}`);
        }
        const data = await response.json();
        setDogImg(data.message);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogImage();
  }, [count]);

  const lifecycleStages = [
    "визуализация компонента - Mounting(монтирование)",
    "обновление компонента - Updating(обновление)",
    "удаление компонента из DOM - Unmounting (размонтирование)",
  ];

  const updatingCases = [
    "обновление переменной состояния",
    "обновление входящий props",
  ];

  const useEffectDescription = [
    "действие которое должно произойти",
    "массив зависимостей - перечисление переменных на обновление которых можно 'подписать' useEffect и его действие",
    "при передаче пустого массива - действие будет срабатывать один раз в начале жизненного цикла",
  ];

  return (
    <div>
      <h2>UseEffect() hook ⚡️</h2>
      <h4>3 этапа жизни компонента:</h4>
      <ul className={styles.useEffectList}>
        {lifecycleStages.map((stage, index) => (
          <li key={index}>{stage}</li>
        ))}
      </ul>
      <h4>Этап Updating происходит в двух случаях:</h4>
      <ul className={styles.useEffectList}>
        {updatingCases.map((caseItem, index) => (
          <li key={index}>{caseItem}</li>
        ))}
      </ul>
      <h4>UseEffect это хук в React который помогает гибко управлять действиями на разных этапах жизненного цикла компонента, изолировать действия от многократного ненужного повторения. UseEffect принимает в себя два аргумента:</h4>
      <ul className={styles.useEffectList}>
        {useEffectDescription.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>

      <div className={styles.dogWrapper}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <img src={dogImg} alt="dogImg" />
        )}
      </div>

      <MyButton text={`${toggle ? 'hide' : 'show'} fellowship`} func={handleToggle} />
      <MyButton text={`${count} 💜`} func={handleCount} />

      {toggle && <Lesson05 />}
    </div>
  );
}