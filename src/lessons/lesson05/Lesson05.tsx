
import { fellowship, IHero } from "./ fellowship";
import HeroCard from "./HeroCard";
import "./lesson05.css";

export default function Lesson05() {
  return (
    <div>
      <h2>React Map() components 🧝🏻‍♀️</h2>
      {fellowship.map((hero: IHero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
