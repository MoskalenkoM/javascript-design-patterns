// Iterator is a behavioral design pattern.
// Итератор - поведенческий шаблон проектирования.

class Iterator {
  constructor(elements) {
    // проверяем на объект или массив
    // можно добавить другую логику для проверок
    this.isArray = Array.isArray(elements);
    if (!this.isArray) {
      this.keys = Object.keys(elements);
    }
    this.index = 0;
    this.elements = elements;
  }

  next() {
    if (this.isArray) {
      return this.elements[this.index++];
    }
    return this.elements[this.keys[this.index++]];
  }

  nasNext() {
    if (this.isArray) {
      return this.index < this.elements.length;
    }
    return this.index < this.keys.length;
  }
}

const chocolate1 = {
  milk: {
    type: 'Milk1',
    price: 10
  },
  dark: {
    type: 'Dark1',
    price: 15
  },
  withNuts: {
    type: 'Nuts1',
    price: 13
  }
};

const chocolate2 = [
  {
    type: 'Milk2',
    price: 10
  },
  {
    type: 'Dark2',
    price: 15
  },
  {
    type: 'Nuts2',
    price: 13
  }
];

const collection1 = new Iterator(['Milk chocolate', 'Dark chocolate', 'Nuts chocolate']);
const collection2 = new Iterator(chocolate1);
const collection3 = new Iterator(chocolate2);

const logAll = (...collections) => {
  collections.forEach(collection => {
    console.log();
    while (collection.nasNext()) {
      console.log(collection.next());
    }
  });
};

logAll(collection1, collection2, collection3);
