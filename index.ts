const name = "Kostya",
    age = 32,
    gender = 'man';

const sayHi = (name, age, gender?) => console.log(`Hello ${name}, you are ${age} and you are a ${gender}`);

sayHi(name, age, gender);

export {};