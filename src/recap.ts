const suma = (a: number, b: number) => {
  return a + b;
};

suma(6, 12);

class Persona {
  constructor(
    private readonly age: number,
    private readonly name: string,
  ) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const xavier = new Persona(33, 'xavi');

console.log(xavier.getSummary());
