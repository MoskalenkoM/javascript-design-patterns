// Singleton is a creational pattern.
// Singleton ensures that the class has only one instance.
// Одиночка - порождающий шаблон проектирования.
// Синглтон гарантирует, что класс имеет только один экземпляр.

class Singleton {
  constructor() {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance;
    }

    this.count = 0;
    Singleton.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

singleton1.increaseCount();
singleton1.increaseCount();
singleton2.increaseCount();
singleton2.increaseCount();
singleton2.increaseCount();

console.log(singleton1.getCount());
console.log(singleton2.getCount());
