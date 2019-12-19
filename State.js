// State is a behavioral design pattern.
// Состояние - поведенческий шаблон проектирования.

class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingPayment extends OrderStatus {
  constructor() {
    super('Ожидание платежа', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('Процесс доставки', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('Доставлено', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    this.state.name === 'Ожидание платежа' ? console.log('Заказ отменён!') : console.log('Отменить заказ невозможно!');
  }
}

const myOrder = new Order();

console.log(myOrder.state.name);

myOrder.cancelOrder();

myOrder.nextState();
console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);

myOrder.cancelOrder();
