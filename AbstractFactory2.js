// Abstract Factory is a creational pattern.
// Абстрактная фабрика - порождающий шаблон проектирования.

// Abstract Factory (Абстрактная фабрика)
class factoryChocolate {
  // Factories (Фабрики)
  milk() {
    return new CreateChocolateMilk('sweet');
  }
  dark() {
    return new CreateChocolateDark('горький');
  }
}

// base class (базовый класс)
class CreateChocolate {
  constructor(type) {
    this.chocolateType = type;
  }

  info() {
    console.log(`This is a ${this.chocolateType} chocolate`);
  }
}

// inherit and extend if necessary
// наследуем и расширяем, если необходимо
class CreateChocolateMilk extends CreateChocolate {
  constructor(...args) {
    super(...args);
  }
}

// inherit and extend if necessary
// наследуем и расширяем, если необходимо
class CreateChocolateDark extends CreateChocolate {
  constructor(...args) {
    super(...args);
  }

  info() {
    // override method (переопределяем метод)
    console.log(`Это ${this.chocolateType} шоколад`);
  }
}

const chocolateCreate1 = new factoryChocolate();
const chocolateCreate2 = new factoryChocolate();
// Instances (Экземпляры)
const milk1 = chocolateCreate1.milk();
const dark1 = chocolateCreate1.dark();
const milk2 = chocolateCreate2.milk();
const dark2 = chocolateCreate2.dark();

milk1.info();
dark1.info();
milk2.info();
dark2.info();
