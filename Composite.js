// Composite is a structural pattern.
// Компоновщик - структурный шаблон проектирования.

class Structure {
  getName() {
    return this.name || 'unnamed';
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price || 0;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Box extends Structure {
  constructor() {
    super();
    this.setName('Box');
    this.setPrice(700);
  }
}

class Shelf extends Structure {
  constructor() {
    super();
    this.setName('Shelf');
    this.setPrice(300);
  }
}

class Door extends Structure {
  constructor() {
    super();
    this.setName('Door');
    this.setPrice(200);
  }
}

class Composite extends Structure {
  constructor() {
    super();
    this.structures = [];
  }

  add(structure) {
    this.structures.push(structure);
  }

  getPrice() {
    return this.structures.map(structure => structure.getPrice()).reduce((a, b) => a + b);
  }
}

class KitchenCabinet extends Composite {
  constructor() {
    super();
    this.setName('Ikea');
  }
}

const myKitchenCabinet = new KitchenCabinet();
myKitchenCabinet.add(new Box());
myKitchenCabinet.add(new Shelf());
myKitchenCabinet.add(new Door());

console.log(`Kitchen cabinet: ${myKitchenCabinet.getName()}, Price: $${myKitchenCabinet.getPrice()}`);
