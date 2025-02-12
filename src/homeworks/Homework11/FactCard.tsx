import styles from "./homework11.module.css";

interface IFactCard {
  fact: string;
  url: string;
}

export default function FactCard({ fact, url }: IFactCard): JSX.Element {
  return (
    <div className={styles.factCard}>
      <img src={url} alt="Cat" className={styles.catImage} />
      <p className={styles.catFact}>{fact}</p>
    </div>
  );
}