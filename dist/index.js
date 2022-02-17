"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
} // TS 측면에선 nterface 더 안전하나 다른 프레임워크를 사용할 땐 class를 사용해야함
const zomd = new Human("ZoMD", 25, "male");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(zomd));
//# sourceMappingURL=index.js.map