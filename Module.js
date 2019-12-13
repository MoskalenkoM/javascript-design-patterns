// Common JavaScript design patterns.
// Общие шаблоны проектирования JavaScript.

const footballTransfers = (() => {
  const players = [];

  return {
    addPlayer(player) {
      players.push(player);
    },
    showAll() {
      players.forEach(p => {
        console.log(p.name, p.surname, p.price);
      });
    }
  };
})();

const CR7 = {
  name: 'Cristiano',
  surname: 'Ronaldo',
  price: '$110.000.000'
};

const CaretBale = {
  name: 'Caret',
  surname: 'Bale',
  price: '$70.000.000'
};

footballTransfers.addPlayer(CR7);
footballTransfers.addPlayer(CaretBale);
footballTransfers.showAll();
