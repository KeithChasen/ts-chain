const name = "Kostya",
    age = 32,
    gender = 'man';

const sayHi = (name: string, age: number, gender: string): string =>
    `Hello ${name}, you are ${age} and you are a ${gender}`;

console.log(sayHi(name, age, gender));

export {};
