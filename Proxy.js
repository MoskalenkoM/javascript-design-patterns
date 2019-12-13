// Proxy is a structural pattern.
// Заместитель - структурный шаблон проектирования.

class NetworkAccess {
  connect() {
    console.log('Подключение к сети!');
  }

  disconnect() {
    console.log('Отключение от сети!');
  }
}

class SecureNetwork {
  constructor(network) {
    this.network = network;
  }

  connect(password) {
    if (this.authenticate(password)) {
      this.network.connect();
    } else {
      console.log('Доступ запрещён!');
    }
  }

  authenticate(password) {
    return password === 'Max';
  }

  disconnect() {
    this.network.disconnect();
  }
}

const myNetwork = new SecureNetwork(new NetworkAccess());

myNetwork.connect('Bill');
myNetwork.connect('Max');
myNetwork.disconnect();
