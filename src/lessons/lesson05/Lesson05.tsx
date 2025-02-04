import { fellowship, IHero } from "./ fellowship";
import HeroCard from "./HeroCard";
import styles from './lesson05.module.css'

export default function Lesson05(): JSX.Element {
  return (
    <div className={styles.heroCardsContainer}>
      {fellowship.map((hero: IHero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
