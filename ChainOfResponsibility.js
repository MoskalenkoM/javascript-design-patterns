// Chain of responsibility is a behavioral design pattern.
// Цепочка обязанностей - поведенческий шаблон проектирования.

class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Сумма: ${orderPrice}, способ оплаты: ${this.name}`);
    } else if (this.nextOption) {
      console.log(`На ${this.name} недостаточно средств!`);
      this.nextOption.pay(orderPrice);
    } else {
      console.log(`На ${this.name} Недостаточно средств!`);
      console.log('ВЕЗДЕ НЕДОСТАТОЧНО СРЕДСТВ!');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.nextOption = account;
  }

  show() {
    console.log(this);
  }
}

class MasterCard extends Account {
  constructor(balance) {
    super();
    this.name = 'Master card';
    this.balance = balance;
  }
}

class ApplePay extends Account {
  constructor(balance) {
    super();
    this.name = 'Apple Pay';
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = 'Qiwi Wallet';
    this.balance = balance;
  }
}

const masterCard = new MasterCard(300);
const applePay = new ApplePay(500);
const qiwi = new Qiwi(700);

masterCard.setNext(applePay);
applePay.setNext(qiwi);

masterCard.pay(570);
masterCard.show();
