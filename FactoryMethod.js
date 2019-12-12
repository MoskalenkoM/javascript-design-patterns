// Factory Method is a creational pattern.
// Фабричный метод - порождающий шаблон проектирования.

class chocolateFactory {
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
    console.log(`chocolate: ${this.type[0].toUpperCase()}${this.type.slice(1)}, price: ${this.price}`);
  }
}

const factory = new chocolateFactory();

const milkChocolate = factory.create('Milk');
const darkChocolate = factory.create('darK');

milkChocolate.info();
darkChocolate.info();
