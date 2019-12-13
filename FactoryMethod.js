// Factory Method is a creational pattern.
// Фабричный метод - порождающий шаблон проектирования.

class ChocolateFactory {
  create(type) {
    const chocolateType = type.toLowerCase();
    if (chocolateType === 'milk') {
      return new CreateChocolate(chocolateType, '$1');
    } else if (chocolateType === 'dark') {
      return new CreateChocolate(chocolateType, '$1.2');
    }
  }
}

class CreateChocolate {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
  info() {
    console.log(`Chocolate: ${this.type[0].toUpperCase()}${this.type.slice(1)}, Price: ${this.price}`);
  }
}

const factory = new ChocolateFactory();

const myMilkChocolate = factory.create('Milk');
const myDarkChocolate = factory.create('darK');

myMilkChocolate.info();
myDarkChocolate.info();
