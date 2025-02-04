import styles from './lesson05.module.css';
import { IHero } from "./ fellowship";

interface HeroCardProps {
  hero: IHero;
}

export default function HeroCard({ hero }: HeroCardProps): JSX.Element {
  return (
    <div className={`${styles.heroCard} ${hero.isDark ? styles.darkHero : styles.lightHero}`}>
      <img src={hero.image} alt={hero.name} className={styles.heroImage} />
      <p>
        Hero: <strong>{hero.name}</strong>
      </p>
      <p>Age: {hero.age} y.o</p>
      <p>
        <strong>Weapons:</strong>
      </p>
      {hero.weapons.length > 0 ? (
        <ul>
          {hero.weapons.map((weapon, index) => (
            <li key={index}>{weapon}</li>
          ))}
        </ul>
      ) : (
        <p>No weapons</p>
      )}
    </div>
  );
}