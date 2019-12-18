// Strategy is a behavioral design pattern.
// Стратегия - поведенческий шаблон проектирования.

function baseStrategy(amount) {
  return amount;
}

function superStrategy(amount) {
  return amount * 0.55;
}

function brilliantStrategy(amount) {
  return amount * 0.25;
}

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

const baseCustomer = new AutoCart(baseStrategy);
const superCustomer = new AutoCart(superStrategy);
const brilliantCustomer = new AutoCart(brilliantStrategy);

baseCustomer.setAmount(10000);
console.log(baseCustomer.checkout());

superCustomer.setAmount(10000);
console.log(superCustomer.checkout());

brilliantCustomer.setAmount(10000);
console.log(brilliantCustomer.checkout());
