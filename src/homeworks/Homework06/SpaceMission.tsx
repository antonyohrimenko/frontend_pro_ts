import styles from "./spacemission.module.css";

export default function SpaceMission(): JSX.Element {
  const shipName: string = "Apollo 11";
  const crewCount: number = 3;
  const missionStarted: boolean = true;
  const crewNames: string[] = ["Нил Армстронг", "Майкл Коллинз", "Базз Олдрин"];
  const captain: readonly [string, number] = ["Нил", 35];

  function startMission(shipName: string): string {
    return `Миссия ${shipName} началась!`;
  }

  return (
    <div className={styles.sidebar}>
      <h2>Название миссии: {shipName}</h2>
      <p>Количество экипажа: {crewCount}</p>
      <p>Миссия началась: {missionStarted ? "Да" : "Нет"}</p>
      <p>
        Капитан: {captain[0]}, возраст: {captain[1]}
      </p>
      <p>Экипаж:</p>
      <ul>
        {crewNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p> {startMission(shipName)} </p>
    </div>
  );
}
