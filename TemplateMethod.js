// Template Method is a behavioral design pattern.
// Шаблонный метод - поведенческий шаблон проектирования.

class MakerChocolate {
  make() {
    this.addNuts();
    this.addWater();
    this.addSugar();
    this.addFilling();
  }
}

class MilkMakerChocolate extends MakerChocolate {
  addNuts() {
    console.log('Орехи для молочного шоколада!');
  }

  addWater() {
    console.log('Количество воды для молочного шоколада!');
  }

  addSugar() {
    console.log('Количество сахара для молочного шоколада!');
  }

  addFilling() {
    console.log('Наполнители для молочного шоколада!');
  }
}

class DarkMakerChocolate extends MakerChocolate {
  addNuts() {
    console.log('Орехи для тёмного шоколада!');
  }

  addWater() {
    console.log('Количество воды для тёмного шоколада!');
  }

  addSugar() {
    console.log('Количество сахара для тёмного шоколада!');
  }

  addFilling() {
    console.log('Наполнители для тёмного шоколада!');
  }
}

const myMilkChocolate = new MilkMakerChocolate();
const myDarkChocolate = new DarkMakerChocolate();

myMilkChocolate.make();
console.log();
myDarkChocolate.make();
