import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson12.module.css";

interface IFormikValues {
  firstname: string;
  lastname: string;
  email: string;
}

export default function Lesson12(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    } as IFormikValues,
    onSubmit: (values: IFormikValues, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <h2>Lesson 12: Formik 📝</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          value={formik.values.firstname}
          onChange={formik.handleChange}
          name="firstname"
          type="text"
          placeholder="firstname"
        />
        <input
          value={formik.values.lastname}
          onChange={formik.handleChange}
          name="lastname"
          type="text"
          placeholder="lastname"
        />
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <MyButton text="Send" />
      </form>
    </div>
  );
}
