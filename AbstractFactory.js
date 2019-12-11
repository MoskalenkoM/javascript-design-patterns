// Abstract Factory is a creational pattern.

// Abstract Factory
function chocolateProducer(type) {
  const typeChocolate = type.toLowerCase();
  if (typeChocolate === 'milk') {
    return milkChocolate(typeChocolate);
  } else if (typeChocolate === 'dark') {
    return darkChocolate(typeChocolate);
  }
}

// Factories
function milkChocolate(type) {
  return new CreateMilkChocolate(type);
}

function darkChocolate(type) {
  return new CreateDarkChocolate(type);
}

class CreateMilkChocolate {
  constructor(type) {
    this.typeChocolate = `This is a ${type} chocolate`;
  }
}

class CreateDarkChocolate {
  constructor(type) {
    this.typeChocolate = `This is a ${type} chocolate`;
  }
}

// Instances
const chocolate1 = chocolateProducer('Milk');
const chocolate2 = chocolateProducer('daRk');

console.log(chocolate1.typeChocolate);
console.log(chocolate2.typeChocolate);
