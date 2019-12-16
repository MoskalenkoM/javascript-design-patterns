// Flyweight is a structural pattern.
// Легковес - структурный шаблон проектирования.

class Chocolate {
  constructor(type) {
    this.type = type;
  }
}

class ChocolateFactory {
  constructor() {
    this.types = {};
  }

  create(name) {
    let type = this.types[name];
    if (type) {
      return type;
    }
    this.types[name] = new Chocolate(name);
    return this.types[name];
  }

  getTypes() {
    console.table(this.types);
  }
}

const factory = new ChocolateFactory();
const milkChocolate1 = factory.create('Milk chocolate');
const darkChocolate1 = factory.create('Dark chocolate');
const milkChocolate2 = factory.create('Milk chocolate');
factory.getTypes();
