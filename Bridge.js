// Bridge is a structural pattern.
// Мост - структурный шаблон проектирования.

class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class SilverColor extends Color {
  constructor() {
    super('Silver');
  }
}

class BlackColor extends Color {
  constructor() {
    super('Black');
  }
}

class MercedesBenz extends Model {
  constructor(color) {
    super(color);
    this.model = 'Mercedes-Benz';
  }

  info() {
    console.log(`Модель: ${this.model}, Цвет: ${this.color.get()}`);
  }
}

const BlackMercedes = new MercedesBenz(new BlackColor());
const SilverMercedes = new MercedesBenz(new SilverColor());
BlackMercedes.info();
SilverMercedes.info();
