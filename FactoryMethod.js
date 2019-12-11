// Factory Method is a creational pattern.

function chocolateFactory(type) {
  const typeChocolate = type.toLowerCase();
  if (typeChocolate === 'milk') {
    return new CreateChocolate(typeChocolate, '$1');
  } else if (typeChocolate === 'dark') {
    return new CreateChocolate(typeChocolate, '$1.2');
  }
}

class CreateChocolate {
  constructor(type, price) {
    this.type = type[0].toUpperCase() + type.slice(1);
    this.price = price;
  }

  info() {
    console.log(`chocolate: ${this.type}, price: ${this.price}`);
  }
}

const milkChocolate = chocolateFactory('Milk');
const darkChocolate = chocolateFactory('darK');

milkChocolate.info();
darkChocolate.info();
