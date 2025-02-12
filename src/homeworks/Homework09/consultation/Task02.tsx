// Task_2

import { useEffect, useState } from "react";
import styles from "./task02.module.css";

// Необходимо отрисовать ненумерованный список
//  с лист-айтамами с контентом  внутри:

// https://fakestoreapi.com/products

//             {название продукта}
//            {картинка продукта}
//           {`${цена продукта} $`}

// Определим интерфейс

export default function Task02() {
  interface IProduct {
    id: number;
    title: string;
    image: string;
    price: number;
  }

  // Создаем состояние для хранения списка продуктов

  const [product, setProduct] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Функция для получения данных с API

  const fetchProductData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: IProduct[] = await response.json();
      setProduct(data);
      console.log(data); // для проверки
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  //  теперь все продукты хранятся у нас в  product

  // Вызываем fetchProductData при первом рендере
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {/* отрисовываем наш список */}

      <h2>Task 02: Product List</h2>

      {isLoading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul className={styles.productList}>
        {product.map((product) => (
          <li className={styles.productCard} key={product.id}>
            <img
              className={styles.image}
              src={product.image}
              alt="some image"
            ></img>
            <p>
              <strong className={styles.title}>{product.title}</strong>
            </p>
            <p>
              <strong className={styles.price}>Price: {product.price}$ </strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
