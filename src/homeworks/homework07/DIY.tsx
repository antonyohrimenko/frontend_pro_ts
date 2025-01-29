export default function DIY(): JSX.Element {
  class Dog {
    constructor(readonly name: string) {}
    sayHello(): string {
      return "Dog says Hello!";
    }
  }

  class Fish {
    constructor(readonly name: string) {}
    dive(howDeep: number): string {
      return `Fish diving ${howDeep} meters`;
    }
  }

  type Pet = Dog | Fish;

  function talkToPet(pet: Pet): string | undefined {
    if (pet instanceof Dog) {
      return pet.sayHello();
    } else if (pet instanceof Fish) {
      return pet.dive(10);
    }
  }

  const myDog = new Dog("Sammy");
  const myFish = new Fish("Frady");

  console.log(talkToPet(myDog));
  console.log(talkToPet(myFish));

  return <div></div>;
}
