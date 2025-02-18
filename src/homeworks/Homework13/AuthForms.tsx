import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema, loginSchema } from "./validationSchemas";
import styles from "./authForms.module.css";

export default function AuthForms(): JSX.Element {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.h2}>{isRegister ? "Регистрация" : "Вход"}</h2>

      {isRegister ? (
        <Formik
        key='register'
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          validateOnChange={false}
          onSubmit={(values) => {
            console.log("Регистрация :", values);
          }}
        >
          {({ isSubmitting}) => (
            <Form className={styles.form}>
              <div>
                <Field
                  type="text"
                  name="username"
                  placeholder="Имя пользователя"
                  className={styles.input}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className={styles.input}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Повторите пароль"
                  className={styles.input}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.button}
              >
                Зарегистрироваться
              </button>
            </Form>
          )}
          
        </Formik>
      ) : (
        <Formik
        key='login'
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          validateOnChange={false}
          onSubmit={(values) => {
            console.log("Вход:", values);
          }}
        >
          {({ isSubmitting}) => (
            <Form className={styles.form}>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Введите Email"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
                
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Введите Пароль"
                  className={styles.input}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.button}
              >
                Войти
              </button>
            </Form>
          )}
        </Formik>
      )}

      <button
        onClick={() => 
          setIsRegister(!isRegister)}
        className={styles.switchButton}
      >
        {isRegister
          ? "Уже есть аккаунт? Войти"
          : "Нет аккаунта? Зарегистрироваться"}
      </button>
    </div>
  );
}
