// import "./MyButton.css";

// переписываем тут на TypeScript компонент кнопки

interface IMyButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  func: () => void;
}

export default function MyButton({
  type = "submit",
  func,
  text = "click me!",
}: IMyButtonProps): JSX.Element {
  return (
    <button type={type} onClick={func} className="button">
      {text}
    </button>
  );
}
