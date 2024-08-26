// function example<T>(value: T): T {
//   return value;
// }

// console.log(example<string>("Hello World!"));
// console.log(example<number>(12352));

// function example<T, U>(value: T, value2: U): T {
//   return value;
// }

const example = <T, U>(value: T, value2: U): T => value;
console.log(example<string, number>("Hello World!", 12352));
console.log(example<number, boolean>(12352, true));
