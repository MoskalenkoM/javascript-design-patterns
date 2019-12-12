// Builder is a creational pattern.
// Строитель - порождающий шаблон проектирования.

class Chocolate {
  constructor() {
    this.sugar = false;
    this.nuts = false;
    this.milk = false;
    this.price = '$0';
  }
}

class ChocolateBuilder {
  constructor() {
    this.chocolate = new Chocolate();
  }

  addSugar(sugar) {
    this.chocolate.sugar = sugar;
    return this;
  }

  addNuts(nuts) {
    this.chocolate.nuts = nuts;
    return this;
  }

  addMilk(milk) {
    this.chocolate.milk = milk;
    return this;
  }

  addPrice(price) {
    this.chocolate.price = price;
    return this;
  }

  madeIn(madeIn) {
    this.chocolate.madeIn = madeIn;
    return this;
  }

  build() {
    return this.chocolate;
  }
}

// Создаём и конфигурируем экземпляры
const chocolate1 = new ChocolateBuilder()
  .addMilk(true)
  .addNuts(true)
  .addSugar(true)
  .addPrice('$25')
  .madeIn('Swiss')
  .build();

const chocolate2 = new ChocolateBuilder()
  .addNuts(true)
  .addPrice('$15')
  .build();

console.log(chocolate1);
console.log(chocolate2);
