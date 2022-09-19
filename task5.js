// task 5 Objects --------------------------------------------------------
// предыдущее задание переписанное на классы

class Device {
  constructor(name, power) {
    this.type = 'Electro';
    this.name = name;
    this.power = power;
  }

  turnOn(socket) {
    this.socket = socket;
    if (this.socket === 1) console.log(`${this.name} turned on`);
    if (this.socket === 0) console.log(`${this.name} turned off`);
  }
}
class KitchenDevice extends Device {
  constructor(name, power) {
    super(name);
    this.power = power;
    this.place = 'Kitchen';
  }
  turnOn(socket) {
    super.turnOn(socket);
  }
}

const lamp = new Device('Lamp', 75);
const comp = new Device('Computer', 300);
const microwave = new KitchenDevice('Microwave', 2000);
const combine = new KitchenDevice('Combine', 1000);

comp.turnOn(0);
lamp.turnOn(1);
microwave.turnOn(1);
combine.turnOn(0);