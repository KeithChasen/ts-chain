interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Kostya",
    age: 32,
    gender: 'man'
};

const sayHi = (person: Human): string =>
    `Hello ${person.name}, you are ${person.age} and you are a ${person.gender}!`;

console.log(sayHi(person));

export {};
