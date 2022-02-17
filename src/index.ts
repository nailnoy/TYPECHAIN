class Human {
    public name: string;
    public age: number;
    public gender: string; //private를 하면 클래스 외에서 사용되지않게 보호함
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  } // TS 측면에선 nterface 더 안전하나 다른 프레임워크를 사용할 땐 class를 사용해야함
  
  const zomd = new Human("ZoMD", 25, "male");
  
  const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${
      person.gender
    }!`;
  };

  console.log(sayHi(zomd));
  
  export {};