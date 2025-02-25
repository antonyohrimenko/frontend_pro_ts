import { createContext, useContext, useEffect, useState } from "react";

// типизируем данные для контекста
interface IFavoritesContextType {
  // массив из ID избранных товаров
  favoriteItems: number[];
  addToFavorites: (id: number) => void;  // добавление
  removeFromFavorites: (id: number) => void; // удаление
  isFavorite: (id: number) => boolean;  // проверка, является ли товар избранным
}

// создаем объект контекст для дальнейшей работы с ним и даем начальное значение
export const FavoritesContext = createContext<IFavoritesContextType | undefined>(undefined);

// обертка 
export const FavoritesProvider = ({ children }: { children: React.ReactNode; }) => {
  // переменная состояния для значений избранного
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);

  // добавления товара
  const addToFavorites = (id: number) => {
    if (!isFavorite(id)) {
      setFavoriteItems([...favoriteItems, id]);
    }
  };

  // удаления товара
  const removeFromFavorites = (id: number) => {
    setFavoriteItems(favoriteItems.filter(itemId => itemId !== id));
  };

  // проверка на избранность
  const isFavorite = (id: number) => favoriteItems.includes(id);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoriteItems(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// портал для наших данных
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('no such context 🫣');
  }
  return context;
};
