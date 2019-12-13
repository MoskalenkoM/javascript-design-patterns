// Facade is a structural pattern.
// Фасад - структурный шаблон проектирования.

class KitchenCabinetConveyor {
  setBox() {
    console.log('Корпус установлен!');
  }

  getBox() {
    console.log('Корпус удалён!');
  }

  setShelves() {
    console.log('Полки установлены!');
  }

  getShelves() {
    console.log('Полки удалены!');
  }

  setDoors() {
    console.log('Двери установлены!');
  }

  getDoors() {
    console.log('Двери удалены!');
  }
}

class ConveyorFacade {
  constructor(kitchenCabinet) {
    this.kitchenCabinet = kitchenCabinet;
  }

  buildKitchenCabinet() {
    this.kitchenCabinet.setBox();
    this.kitchenCabinet.setShelves();
    this.kitchenCabinet.setDoors();
  }

  changeShelves() {
    this.kitchenCabinet.getShelves();
    this.kitchenCabinet.setShelves();
  }

  changeDoors() {
    this.kitchenCabinet.getDoors();
    this.kitchenCabinet.setDoors();
  }
}

const myKitchenCabinet = new ConveyorFacade(new KitchenCabinetConveyor());
myKitchenCabinet.buildKitchenCabinet();
myKitchenCabinet.changeShelves();
myKitchenCabinet.changeDoors();
