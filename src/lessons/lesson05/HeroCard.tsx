import "./lesson05.css";
import { IHero } from "./ fellowship"; // для этого сделал экспорт у интерфейса в fellowship.ts


interface HeroCardProps {
  hero: IHero; // Типизируем проп hero
}

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <div className={`heroCard ${hero.isDark ? "darkHero" : "lightHero"}`}>
      <img src={hero.image} alt={hero.name} className="heroImage" />
      <p>
        Hero: <strong>{hero.name}</strong>
      </p>
      <p>Age: {hero.age} y.o</p>
      <p>Weapons:</p>
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
