import { useEffect, useState } from "react";
import styles from './task01.module.css'

export default function Task01(): JSX.Element {

  // 1. Определяем интерфейс для пользователя
  interface IUser {
    id: number;
    username: string;
    name: {
      firstname: string;
      lastname: string;
    };
    phone: string;
    email: string;
    address: {
      zipcode: string;
    };
  }

  // 2. Создаем состояние для хранения списка пользователей
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 3. Функция для получения данных с API
  const fetchUserData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://fakestoreapi.com/users");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: IUser[] = await response.json();
      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 4. Вызываем fetchUserData при первом рендере
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Task 01: Users List</h2>

      {isLoading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul className={styles.ul}>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <strong>Ник:</strong> {user.username}
            </p>
            <p>
              <strong>Имя, фамилия:</strong> {user.name.firstname} {user.name.lastname}
            </p>
            <p>
              <strong>Телефон:</strong> {user.phone}
            </p>
            <p>
              <strong>E-mail:</strong> {user.email}
            </p>
            <p>
              <strong>Zip-code:</strong> {user.address.zipcode}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
