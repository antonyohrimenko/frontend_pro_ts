import { createContext, useContext, useState } from "react";

// типизируем элемент корзины
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// типизируем данные для контекста
// это те данные, которые будут доступны для всех компонентов
interface ICartContextType {
  // массив из элементов корзины
  cart: ICartItem[]; // ✅
  //функция добавления в корзину товара
  addToCart: (product: ICartItem) => void; // ✅
  // функция удаления товара из корзины
  removeFromCart: (id: number) => void;  // ✅
  // очистка корзины
  clearCart: () => void; // ✅
}

// ! 1. создаем объект контекст для дальнейшей работы с ним и даем начальное значение
export const CartContext = createContext<ICartContextType | undefined>(undefined);

// ! 2. создаем компонент-обертку, который будет использовать в себе CartContext и передавать в него нужные данные.
// этим компонентом мы обернем все наше приложение, чтобы иметь доступ к этим данным
export const CartProvider = ({ children }: { children: React.ReactNode; }) => {
  // * 1 переменная состояния для значений корзины
  const [cart, setCart] = useState<ICartItem[]>([]);

  // * 2 функция добавления товара в корзину
  const addToCart = (product: ICartItem) => {
    setCart(prev => {
      // проверяем есть ли уже товар с id как у переданного продукта в корзине
      const productExist = prev.find(item => item.id === product.id);
      if (productExist) {
        // в случае если продукт с переданной id уже есть мы меняем ему в массиве quantity
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      // если такого элемента нет - дописываем его в массив
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // * 3 функция удаления товара из корзины
  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // * 4. функция очистки корзины
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {/* на место children придут обернутые CartProvider компоненты */}
      {children}
    </CartContext.Provider>
  );
};

// ! 3. функция для получения данных из контекста
export const useCart = () => {
  // проверяем что контекст не undefined
  // пробуем забрать из него данные через хук useContext, который принимает в себя выбранный объект контекст
  // если он отдаст данные, то все хорошо - мы вернем их, если нет - покажем ошибку
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('no such context 🫣');
  }
  return context;
};
