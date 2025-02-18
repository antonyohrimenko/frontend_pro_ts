import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson13.module.css";
import * as Yup from "yup";

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

// создаем схемы валидации
// ! валидация на число number
// typeError ссобщение при ошибке типа
// integer() проверка на целое число + сообщение об ошибке

const schema = Yup.object().shape({
  model: Yup.number()
    .typeError("Model must be a Number!")
    .required("model is required")
    .integer("model is integer")
    .min(100, "model number is more than 100")
    .max(1500, "model number is less than 1500"),

  creator: Yup.string()
    .typeError("Creator is a String!")
    .required("creator is required"),

  email: Yup.string()
    .typeError("Email is a String!")
    .email("incorrect email format")
    .max(50, "email 50 symbols"),
});

export default function Lesson13(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      model: "",
      creator: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={styles.formContainer}>
      <h2> Lesson 13: YUP (валидация формы) </h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input
          onChange={formik.handleChange}
          name="model"
          value={formik.values.model}
          type="text"
          placeholder="Enter model"
        />
        <input
          onChange={formik.handleChange}
          name="creator"
          value={formik.values.creator}
          type="text"
          placeholder="Enter creator"
        />
        <input
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          type="text"
          placeholder="Enter email"
        />
        <MyButton />
      </form>

      {/* ошибки забираем из formnik  */}
      <span> {formik.errors.model}</span>
      <span> {formik.errors.creator}</span>
      <span> {formik.errors.email}</span>
    </div>
  );
}
