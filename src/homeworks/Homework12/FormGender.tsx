import { useState } from "react";
import { useFormik } from "formik";
import styles from "./formGender.module.css";

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
}
interface IName {
  name: string;
}

export default function FormGender(): JSX.Element {
  const [genderData, setGenderData] = useState<IGenderData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Форма с использованием Formik
  const formik = useFormik({
    initialValues: {
      name: "", // Начальное значение для поля имени
    },
    onSubmit: async (values: IName, {resetForm}) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.genderize.io/?name=${values.name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch gender data");
        }
        const data: IGenderData = await response.json();
        setGenderData(data);
      } catch (error) {
        console.error("Error fetching gender data:", error);
        setGenderData(null);
      } finally {
        setIsLoading(false);
      }
      resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <h2>Guess Gender by Name</h2>

      {/* Форма для ввода данных*/}
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter a name"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {/* Тут красиво выводим наши данные */}
      {genderData && (
        <div className={styles.result}>
          <p>
            <strong>Name:</strong> {genderData.name}
          </p>
          <p>
            <strong>Gender:</strong> {genderData.gender}
          </p>
          <p>
            <strong>Probability:</strong> {genderData.probability * 100}%
          </p>
        </div>
      )}
    </div>
  );
}
