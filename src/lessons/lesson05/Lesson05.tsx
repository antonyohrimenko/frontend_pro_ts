import { fellowship, IHero } from "./ fellowship";
import HeroCard from "./HeroCard";
import "./lesson05.css";

export default function Lesson05(): JSX.Element {
  return (
    <div className="heroCardsContainer">
      {fellowship.map((hero: IHero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
