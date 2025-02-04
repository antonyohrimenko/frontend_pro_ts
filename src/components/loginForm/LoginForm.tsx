import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput.tsx";
import styles from './loginForm.module.css'

// Функция LoginForm
export default function LoginForm(): JSX.Element {
  // Типизируем событие для формы

  // не уверен что прави
  const handleSubmit = (): void => {
    console.log("Поздравляю, данные ушли на сервер!"); //  100% ушли консоль не врет :))))
    alert("Ха-ха, данные ушли на сервер!");
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <MyInput
        name="login"
        type="text"
        placeholder="Введите ваш логин"
        label="Логин:"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Введите ваш email"
        label="Email:"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Введите ваш пароль"
        label="Пароль:"
      />
      <MyButton type="submit" func={handleSubmit} text="Sign-in" />
    </form>
  );
}
