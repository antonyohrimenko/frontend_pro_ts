import { useEffect, useState } from "react";
import styles from "./products.module.css";
import ProductCard from "../productCard/ProductCard";
import Cart from "../cart/Cart";
import Loader from "../../homeworks/Homework08/Loader";
import * as Yup from "yup";
import { useFormik } from "formik";

// описал один экземпляр данных в массиве из API
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(3); // установил базовый для 3 карточек

  // описываю схему

  const validationSchema = Yup.object().shape({
    limit: Yup.number()
      .typeError("Нужно ввести число")
      .integer("Число должно быть целым")
      .min(1, "Минимум 1")
      .max(20, "Максимум 20")
      .required("Обязательное поле"),
  });

  // добавляем формик

  const formik = useFormik({
    initialValues: {
      limit: 3,
    },
    validationSchema: validationSchema, // можно в целом так и не писать, а просто validationSchema
    onSubmit: (values) => {
      setLimit(values.limit);
    },
  });

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      if (!res.ok) {
        throw new Error(`Ошибка при загрузке данных: ${res.status}`);
      }
      const data: IProduct[] = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Ошибка при загрузке продуктов:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [limit]);

  return (
    <>
      <Cart />
      <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label><strong>Количество товаров:</strong></label>
            <input className={styles.inputField}
              type="text"
              id="limit"
              name="limit"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.limit}
            />
            {formik.touched.limit && formik.errors.limit ? (
              <div className={styles.errorText}>{formik.errors.limit}</div>
            ) : null}
          </div>
          <button type="submit" className={styles.submitButton}>
            Refresh
          </button>
        </form>
      </div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className={styles.gridContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      )}
    </>
  );
}