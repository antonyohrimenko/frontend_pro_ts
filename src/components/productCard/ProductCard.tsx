import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import MyButton from "../myButton/MyButton";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

interface IProductCardProps {
  title: string;
  image: string;
  id: number;
  price: number;
}

export default function ProductCard({
  title,
  image,
  id,
  price,
}: IProductCardProps): JSX.Element {
  // получаем функцию добавления в корзину из контекста
  const { addToCart } = useCart();

  // получаем функции для избранного из контекста
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <div className={styles.productCard}>
      <h4>{title.length < 30 ? title : title.slice(0, 30) + "..."}</h4>
      <p>Price {price}€</p>
      <div>
        <img src={image} alt="" />
      </div>
      <section>
        <Link to={String(id)}>
          <MyButton text="to product" />
        </Link>
        <MyButton
          func={() => addToCart({ id, title, price, quantity: 1 })}
          text="add to cart"
          variant="danger"
        />
        <span onClick={handleFavoriteClick} style={{ marginLeft: 20}}>
          {isFavorite(id) ? "❤️" : "🤍"}
        </span>
      </section>
    </div>
  );
}
