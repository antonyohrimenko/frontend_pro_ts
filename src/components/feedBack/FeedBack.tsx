import { useState } from "react";
import MyButton from "../myButton/MyButton";

// Задание
// Создайте компонент Feedback в папке components. В самом компоненте должны быть:
// Кнопка “Like” с отображением количества лайков слева от неё.
// Кнопка “Dislike” с отображением количества дизлайков справа от неё.
// Кнопка “Reset Results”, при клике на которую лайки и дизлайки обнуляются.
// Для кнопок используйте компонент MyButton.

export default function FeedBack(): JSX.Element {
  // пишем наш хук изменения значения лайков и дислайков 🪝
  // function MyButton({ type, func, text })

  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  // для лойсов
  const handleLike = (): void => {
    setLike((prev) => prev + 1);
  };

  // для дисов
  const handleDislike = (): void => {
    setDislike((prev) => prev + 1);
  };

  // для reset
  const handleReset = (): void => {
    setDislike(0);
    setLike(0);
  };

  return (
    <div>
      <span> {like} </span>

      {/* так как у нас пропс ожидает функцию (а не OnClick) варианта два. 
       Либо я меняю кнопку и в MyButton ставлю вместо func сразу onClick
       Либо я здесь в FeedBack onClick  меняю на func. Не знаю как лучше. 
       Сделаю пока здесь func  */}

      <MyButton type="button" func={handleLike} text="👍🏻" />
      <MyButton type="button" func={handleDislike} text="👎🏻" />
      <span> {dislike} </span>
      <MyButton type="reset" func={handleReset} text="Reset  🔄" />
    </div>
  );
}
