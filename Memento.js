// Memento is a behavioral design pattern.
// Хранитель (снимок) - поведенческий шаблон проектирования.

class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: val => new Memento(val),
  restore: memento => memento.value
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getmemento(index) {
    return this.values[index];
  }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('Chocolate'));
careTaker.addMemento(creator.save('Chocolate milk'));
careTaker.addMemento(creator.save('Chocolate milk with nuts'));

console.log(creator.restore(careTaker.getmemento(0)));
console.log(creator.restore(careTaker.getmemento(1)));
console.log(creator.restore(careTaker.getmemento(2)));
