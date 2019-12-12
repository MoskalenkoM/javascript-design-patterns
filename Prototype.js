// Prototype is a creational pattern.
// Прототип - порождающий шаблон проектирования.

class SuperChocolate {
  constructor(type, price, filling) {
    this.type = type;
    this.price = price;
    this.filling = filling;
  }

  cloning() {
    return new SuperChocolate(this.type, this.price, this.filling);
  }

  info() {
    console.log(`Chocolate: ${this.type}, Price: ${this.price}, Filling: ${this.filling}`);
  }
}

// Create base super chocolate (Создание базового экземпляра)
const prototypeChocolate = new SuperChocolate('Swiss', '$10', 'Nuts');

// Cloning super chocolate (клонирование базового экземпляра)
const chocolate1 = prototypeChocolate.cloning();
const chocolate2 = prototypeChocolate.cloning();
const chocolate3 = prototypeChocolate.cloning();

// Changing data for particular super chocolate
// Изменение данных конкретного экземпляра
chocolate1.type = 'Russian';
chocolate1.price = '$12';
chocolate1.filling = 'Walnut';
chocolate2.type = 'USA';
chocolate2.price = '$14';
chocolate2.filling = 'Milk and nuts';

chocolate1.info();
chocolate2.info();
chocolate3.info();
