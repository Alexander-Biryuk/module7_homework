// task 4 Objects --------------------------------------------------------

function Device(name, power) { // создание набора общих свойств
  this.type = 'Electro';
  this.name = name;
  this.power = power;
}

// функция включения / выключения из розетки
Device.prototype.turnOn = function(socket) {
  this.socket = socket;
  if (this.socket === 1) console.log(`${this.name} turned on`);
  if (this.socket === 0) console.log(`${this.name} turned off`);
}

// класс - приборы, подкласс - кухонные приборы.
function KitchenDevice (name, power) {
  this.place = 'Kitchen';   // добавление нового свойства в подкласс
  this.name = name;
  this.power = power;
}

// создание связи класса кухонных приборов с классом приборы
KitchenDevice.prototype = new Device;

const lamp = new Device('Lamp', 75);
const comp = new Device('Computer', 300);
const microwave = new KitchenDevice('Microwave', 2000);
const combine = new KitchenDevice('Combine', 1000);

comp.turnOn(0);
lamp.turnOn(1);
microwave.turnOn(1);
combine.turnOn(0);
