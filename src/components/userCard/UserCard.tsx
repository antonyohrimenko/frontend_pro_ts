import MyButton from "../myButton/MyButton";

interface IUserCardProps {
  name: string;
  age: number;
}

export default function UserCard(props: IUserCardProps) {
  // функция обработчик
  const handleClick = (): void => {
    alert(`Hallo, ${props.name}!`);
  };

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p>
      <MyButton func={handleClick} text={`Choose... ${props.name}`} />
    </div>
  );
}
