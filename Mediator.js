// Mediator is a behavioral design pattern.
// Посредник - поведенческий шаблон проектирования.

class ChocolateDealer {
  constructor() {
    this.customers = [];
  }

  orderChocolate(customer, chocolateType, filling) {
    const customerName = customer.getName();
    this.addToCustomersList(customerName);
    console.log(`ПОКУПАТЕЛЬ: ${customerName}, ШОКОЛАД: ${chocolateType} ${filling}`);
  }

  addToCustomersList(customerName) {
    this.customers.push(customerName);
  }

  getToCustomersList() {
    return this.customers;
  }
}

class Customer {
  constructor(customerName, dealerMediator) {
    this.customerName = customerName;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.customerName;
  }

  makeOrder(chocolateType, filling) {
    this.dealerMediator.orderChocolate(this, chocolateType, filling);
  }
}

const mediator = new ChocolateDealer();

const max = new Customer('Макс', mediator);
const sergey = new Customer('Сергей', mediator);

max.makeOrder('молочный', 'с орехами');
sergey.makeOrder('горький', 'без орехов');

console.log('Список покупателей: ', mediator.getToCustomersList());
