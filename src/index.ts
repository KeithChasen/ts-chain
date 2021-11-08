interface Human {
    name: string,
    age: number,
    gender: string
}

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const kostya = new Human('Kostya', 32, 'man');

const sayHi = (person: Human): string =>
    `Hello ${person.name}, you are ${person.age} and you are a ${person.gender}!`;

console.log(sayHi(kostya));

export {};
