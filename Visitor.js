// Visitor is a behavioral design pattern.
// Посетитель - поведенческий шаблон проектирования.

class Chocolate {
  accept(visitor) {
    visitor(this);
  }
}

class ChocolateMilk extends Chocolate {
  constructor() {
    super();
  }

  info() {
    console.log('Молочный шоколад!');
  }
}

class ChocolateDark extends Chocolate {
  constructor() {
    super();
  }

  info() {
    console.log('Тёмный шоколад!');
  }
}

class ChocolateWithNuts extends Chocolate {
  constructor() {
    super();
  }

  info() {
    console.log('Шоколад с орехами!');
  }
}

function visitor(chocolate) {
  if (
    chocolate instanceof ChocolateMilk ||
    chocolate instanceof ChocolateDark ||
    chocolate instanceof ChocolateWithNuts
  ) {
    chocolate.export = chocolate.info();
  }
}

const myMilkChocolate = new ChocolateMilk();
const myDarkChocolate = new ChocolateDark();
const myChocolateWithNuts = new ChocolateWithNuts();

myMilkChocolate.accept(visitor);
myDarkChocolate.accept(visitor);
myChocolateWithNuts.accept(visitor);
