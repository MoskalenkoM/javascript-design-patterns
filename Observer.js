// Observer is a behavioral design pattern.
// Наблюдатель - поведенческий шаблон проектирования.

class SportNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(news) {
    this.news = news;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(subscriber => subscriber.inform(this.news));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(it => !(it instanceof observer));
  }
}

class Max {
  inform(news) {
    console.log(`Макс получил новость: ${news}`);
  }
}

class Sergey {
  inform(news) {
    console.log(`Сергей получил новость: ${news}`);
  }
}

const sportNews = new SportNews();

sportNews.register(new Max());
sportNews.register(new Sergey());

sportNews.setNews('Liverpool выиграл Лигу Чемпионов по футболу в 2019 году!');
