// Abstract Factory is a creational pattern.
// Абстрактная фабрика - порождающий шаблон проектирования.

// Abstract Factory (Абстрактная фабрика)
function factoryChocolate(type) {
  const chocolateType = type.toLowerCase();
  if (chocolateType === 'milk') {
    return chocolateMilk();
  } else if (chocolateType === 'dark') {
    return chocolateDark();
  }
}

// Factories (Фабрики)
function chocolateMilk() {
  return new CreateChocolateMilk('sweet');
}

function chocolateDark() {
  return new CreateChocolateDark('горький');
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

// Instances (Экземпляры)
const chocolate1 = factoryChocolate('Milk');
const chocolate2 = factoryChocolate('daRk');

chocolate1.info();
chocolate2.info();
