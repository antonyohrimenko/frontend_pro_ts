export default function Lesson07() {
  // * Interface - типизация Object

  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    age?: number; // так мы делаем ключ не обязательным
  }

  interface ISpaceHero extends ISuperHero {
    homeplanet: string;
  }

  const hero1: ISuperHero = {
    id: 1,
    name: "Bruce Wayne",
    nickname: "Batman",
    superpowers: [],
  };

  const hero2: ISpaceHero = {
    id: 2,
    name: "Clark Kent",
    nickname: "Superman",
    superpowers: ["superfly", "supervision"],
    homeplanet: "Crypton",
  };

  // создадим обьект пустышку через quick-fix (add missing properties)

  const hero3: ISuperHero = {
    id: 0,
    name: "",
    nickname: "",
    superpowers: [],
  };

  // пример обьединения типов

  interface IDarkMagic {
    isDark: true;
  }

  interface ILightMagic {
    isLight: true;
  }

  // пример множественного наследия интерфейса
  // пример создания обьекта с обьединенным типом
  interface IMagic extends ILightMagic, IDarkMagic {}

  const magic: IMagic = {
    isLight: true,
    isDark: true,
  };

  // * Type - типизация Object
  // (альтернативное описание типов для обьекта)

  type User = {
    id: number;
    isAdmin: boolean;
    name: string;
  };

  type UserProfile = User & {
    info: string;
  };

  const neo: UserProfile = {
    id: 10,
    isAdmin: false,
    name: "Neo",
    info: "Programmer in bigTech",
  };

  const jane: User = {
    id: 12,
    isAdmin: false,
    name: "Jane Ostin",
  };

  /// ДЖЕНЕРИКИ
  // (обобщенныые типы). Инструмент с помощью которого мы создаем обобщенные типы компонентов
  // работают при создании и использовании функции

  // тут передаем только число
  // function makeArray(first: number, second: number): number[] {
  //   return [first, second];
  // }

  // makeArray(12, 42);
  // makeArray("A", "B");

  // добавляем дженерики
  function makeArray<T>(first: T, second: T):T[] {
    return [first, second];
  }

  makeArray(12, 42);
  makeArray("A", "B");


  

  return (
    <div>
      <h2> TypeScrip. Часть 2. Типизация обьектов и прочее </h2>
    </div>
  );
}
