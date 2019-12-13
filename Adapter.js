// Adapter is a structural pattern.
// Адаптер - структурный шаблон проектирования.

class Hazelnut {
  simpleAddition() {
    console.log('Простое добавление лесного ореха!');
  }
}

class Walnut {
  selectiveAddition() {
    console.log('Удаляем перегородки и добавляем грецкий орех!');
  }
}

class AdapterWalnut {
  constructor(nut) {
    this.nut = nut;
  }

  simpleAddition() {
    this.nut.selectiveAddition();
  }
}

class ChocolateWithNuts {
  nutsAddition(nut) {
    nut.simpleAddition();
  }
}

// Hazelnut
const myChocolate1 = new ChocolateWithNuts();
const myNuts1 = new Hazelnut();
myChocolate1.nutsAddition(myNuts1); // Добавили лесной орех

// Walnut с адаптером
const myChocolate2 = new ChocolateWithNuts();
const myNutsAdapter = new AdapterWalnut(new Walnut());
myChocolate2.nutsAddition(myNutsAdapter); // Добавили грецкий орех

// Walnut без адаптера
const myChocolate3 = new ChocolateWithNuts();
const myNuts3 = new Walnut();
myChocolate3.nutsAddition(myNuts3); // Error
