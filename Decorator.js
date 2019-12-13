// Decorator is a structural pattern.
// Декоратор - структурный шаблон проектирования.

class Chocolate {
  constructor() {
    this.price = 10;
    this.info = 'Chocolate';
  }

  getPrice() {
    return this.price;
  }

  getInfo() {
    return this.info;
  }
}

class MilkChocolate extends Chocolate {
  constructor() {
    super();
    this.price = 12;
    this.info = 'Milk chocolate';
  }
}

class DarkChocolate extends Chocolate {
  constructor() {
    super();
    this.price = 14;
    this.info = 'Dark chocolate';
  }
}

// Decorator (Декоратор)
class Nuts {
  constructor(chocolate) {
    this.info = chocolate;
  }

  getPrice() {
    return this.info.getPrice() + 2;
  }

  getInfo() {
    return `${this.info.getInfo()} with nuts`;
  }
}

// Decorator (Декоратор)
class Raisins {
  constructor(chocolate) {
    this.info = chocolate;
  }

  getPrice() {
    return this.info.getPrice() + 1;
  }

  getInfo() {
    return `${this.info.getInfo()} with raisins`;
  }
}

// Instances (Экземпляры)
let myMilkChocolate1 = new MilkChocolate();
let myMilkChocolate2 = new MilkChocolate();
let myDarkChocolate1 = new DarkChocolate();

// Decorate them (Декорируем их)
myMilkChocolate1 = new Nuts(myMilkChocolate1);
myMilkChocolate1 = new Raisins(myMilkChocolate1);
myMilkChocolate2 = new Nuts(myMilkChocolate2);
myDarkChocolate1 = new Nuts(myDarkChocolate1);

console.log(`Chocolate: ${myMilkChocolate1.getInfo()}, Price: ${myMilkChocolate1.getPrice()}`);
console.log(`Chocolate: ${myMilkChocolate2.getInfo()}, Price: ${myMilkChocolate2.getPrice()}`);
console.log(`Chocolate: ${myDarkChocolate1.getInfo()}, Price: ${myDarkChocolate1.getPrice()}`);
