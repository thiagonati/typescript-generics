class Person {
  constructor(public name: string, public age: number) {}
}

const display = <T extends Person, U>(pem1: T, pem2: U): void => {
  console.log(pem1.name, pem2);
};

display<Person, number>(new Person("John", 25), 12352);

class User extends Person {}
const user = new User("John", 25);
display<User, number>(user, 12352);

export {};
