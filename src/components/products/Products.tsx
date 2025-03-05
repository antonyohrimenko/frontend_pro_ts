import { useEffect } from "react";
import styles from "./products.module.css";
import ProductCard from "../productCard/ProductCard";
import Cart from "../cart/Cart";
import Loader from "../../homeworks/Homework08/Loader";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  loadLimitedProducts,
  loadProducts,
} from "../../features/productsAction";

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
  const {
    products: reduxProducts,
    error,
    isLoading,
  } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());  // всегда отрисовываем все товары из API. Можно заменить на лимитный
  }, [dispatch]);

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
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loadLimitedProducts(values.limit)); // Вызов c нашим лимитом
    },
  });

  return (
    <>
      <Cart />
      <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>
              <strong>Количество товаров:</strong>
            </label>
            <input
              className={styles.inputField}
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
            Выводим лимит через Redux
          </button>
        </form>
      </div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className={styles.gridContainer}>
          {reduxProducts.map((product) => (
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
