export default function Pdf_task_consultation() {
  // 1) Создайте переменную x и присвойте ей значение 42 . Попробуйте присвоить этой же переменной строку "Hello" . Объясните, почему возникает ошибка.

  //   let x = 42;
  //   x = "Hello";
  // Ошибка возникает потом, что в 4 строке мы сделали неявную типизацию и переменная x является типом number
  // а переопределить мы пытаемся строковый тип данных string. В TS при неявном преобразовании тип присвается
  // один раз при первом определении и остается неизменным.

  // 2) Объявите переменную y с типом string . Присвойте ей значение
  // "TypeScript is awesome!" .

  let ts: string = "TypeScript is awesome!";
  console.log(ts);

  // 3) оздайте тип Age и переменную myAge этого типа. Присвойте переменной значение 30 .

  type Age = number;
  let myAge: Age = 30;
  console.log(myAge);

  // 4) Создайте переменную status , которая может быть либо строкой "active" ,
  // либо числом 1 . Присвойте ей оба значения поочередно.

  let status: string | number;
  status = "active";
  status = 1;
  console.log(status);

  // 5) Создайте тип Animal с возможными значениями "cat" и "dog" . Расширьте этот тип, добавив значение "parrot" . Создайте переменную этого нового типа.

  type Animal = "cat" | "dog";
  type extendedAnimal = Animal | "parrot"; // расширили, все гут

  let pet: extendedAnimal = "cat"; // выбрали из 3 доступных
  pet = "parrot"; // переопределили потестили
  console.log(pet);

  // 6) Создайте массив fruits , который может содержать только строки.
  // Добавьте в массив "apple" и "banana" .

  const fruits: string[] = ["apple", "banana"]; // можем добавить элементы через fruits.push()
  console.log(fruits);

  // 7) Создайте пустой массив numbers , который может содержать только числа. Добавьте в него числа 5 и 10 .

  const numbers: number[] = [5, 10]; // можем добавить элементы через numbers.push()
  console.log(numbers);

  //  8) Создайте тип Person с полями name (строка) и age (число). Создайте объект person этого типа.

  type Person = {
    name: string;
    age: number;
  };

  let somePerson: Person = {
    name: "somePerson",
    age: 35,
  };

  console.log(somePerson);

  // 9) Создайте интерфейс Car с полями model (строка), year (число), и isElectric
  // (булево). Создайте объект этого интерфейса.

  interface Car {
    model: string;
    year: number;
    isElectric: boolean;
  }

  let myCar: Car = {
    model: "BMW",
    year: 2024,
    isElectric: false,
  };

  console.log(myCar);

  // 10) Создайте интерфейс ElectricCar , который расширяет интерфейс Car , добавляя поле batteryCapacity (число). Создайте объект этого интерфейса.

  interface ElectricCar extends Car {
    batteryCapacity: number;
  }

  let myCar2: ElectricCar = {
    batteryCapacity: 1000,
    model: "BMW",
    year: 2020,
    isElectric: true,
  };

  console.log(myCar2);

  // 11) Создайте интерфейс Book с полями title (строка) и author (строка), а также опциональным полем publishedYear (число). Создайте два объекта этого интерфейса, с указанным и неуказанным опциональным полем.

  interface Book {
    title: string;
    author: string;
    publishedYear?: number;
  }

  let book1: Book = {
    title: "Java for dummies",
    author: "Yakov Fain",
  };

  let book2: Book = {
    title: "Java for dummies",
    author: "Yakov Fain",
    publishedYear: 2005,
  };

  console.log(book1);
  console.log(book2);

  // 12) Создайте интерфейс City с полями name (строка), population (число), isCapital (булево), и опциональным полем riversName (строка). Создайте
  // объект этого интерфейса.

  // Сделано в отдельном компоненте на уроке. Смотреть City.tsx
  // 13)  Расширение интерфейса City :
  // Расширьте интерфейс City , добавив поле foundationYear (число). Создайте объект нового интерфейса.

  // Сделано в отдельном компоненте на уроке. Смотреть City.tsx

  // 14) Создайте функцию multiply , которая принимает два числа и возвращает их
  // произведение. Укажите типы для параметров и возвращаемого значения.

  function multiply(x: number, y: number): number {
    return x * y;
  }
  console.log(multiply(10, 5));

  // 15) Напишите стрелочную функцию isEven , которая принимает число и возвращает true , если оно четное, и false в противном случае.

  const isEven = (number: number): boolean => {
    return number % 2 === 0; //  можно черерз тернарный оператор явно указать ? true : false; но это избыточно на мой взгляд
  };
  console.log(isEven(4));

  //   16) Создайте функцию greet , которая принимает строку name и выводит в
  //   консоль приветствие. Укажите, что функция ничего не возвращает.

  const greet = (name: string): void => {
    console.log(`Greeting ${name}`!);
  };
  greet("Anton"); // пример использование, результат в консоле

  //   17) Напишите функцию getLastElement , которая принимает массив чисел и возвращает последний элемент массива.

  const getLastElement = (element: number[]): number => {
    return element[element.length - 1];
  };
  console.log(getLastElement([10, 20, 30, 40]));

  //   18) Напишите функцию describeWeather , которая принимает строку ( "sun" | "rain"
  //   | "snow" ) и возвращает описание погоды.

  function describeWeather(typeOfWeather: "sun" | "rain" | "snow"): string {
    return `It's ${typeOfWeather}`;
  }
  console.log(describeWeather("rain"));

  //   19) Напишите функцию printCarInfo , которая принимает объект интерфейса Car и выводит в консоль информацию о машине.

  const printCarInfo = (car: Car) => {
    Object.keys(car).map((key) => {
      console.log(`${key}: ${car[key as keyof Car]}`); // сделал по красоте (как будто мы не знаем поля обьекта)
      // переберем и выведем все, заодно и map() повторил :)
    });
  };

  // тем самым я смогу вывести 2 обьекта разных (где 3 поля из интерфейса Car, а также где у нас 4 поля extendedCar)

  printCarInfo(myCar);
  printCarInfo(myCar2);

  //   20) Напишите функцию getFullName , которая принимает обязательное поле firstName и опциональное поле lastName . Если lastName не указано,
  //   возвращайте только firstName.

  function getFullName(firstName: string, lastName?: string): string {
    return lastName ? `${firstName} ${lastName}` : firstName; // с такой проверкой не получим undefined если нет lastName
  }
  console.log(getFullName("Anton Okhrimenko"));



  return (
    <div>
      <h2> Делаем задание из PDF-файла 🐣</h2>
    </div>
  );
}
