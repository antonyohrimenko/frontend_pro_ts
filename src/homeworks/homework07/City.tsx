// Создать интерфейс город City
// со следующими полями
//  - name
//  - population - число горожан
//  - riversName - опциональное поле название реки -
//  - isTouristic - является ли туристическим или нет
//  - isCapital - является ли столицей

// Создайте несколько объектов для этого интерфейса

// дополнительно сделайте интерфейс - расширяющий город
// например, добавьте дату основания

export default function City() {
  interface City {
    name: string;
    population: number;
    riversName?: string;
    isToristic: boolean;
    isCapital: boolean;
  }

  const city1: City = {
    name: "Hamburg",
    population: 1400000,
    riversName: "Elba",
    isToristic: true,
    isCapital: false,
  };

  const city2: City = {
    name: "Berlin",
    population: 2400000,
    riversName: "Spree",
    isToristic: true,
    isCapital: true,
  };

  interface ExtendedCity extends City {
    dateOfDeveloped: number;
  }

  const city3: ExtendedCity = {
    dateOfDeveloped: 1700,
    name: "SPB",
    population: 5000000,
    riversName: "Neva",
    isToristic: false,
    isCapital: false,
  };

  console.log(city1, city2, city3);

  return <> </>;
}
