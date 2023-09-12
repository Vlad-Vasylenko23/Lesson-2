const car_volkswagen_passat_b7 = {
  brand: 'Volkswagen',
  model: 'Passat b7',
  max_speed: 210,
  Acceleration_from_standstill: 9.9,
  power: 140,
  Fuel_consumption: 5.3,
};

const car_mercedes_vito_W447 = {
  brand: 'Mercedes',
  model: 'Vito W447',
  max_speed: 190,
  Acceleration_from_standstill: 11.0,
  power: 160,
  Fuel_consumption: 6.4,
};

const car_Audi_A6_C7 = {
  brand: 'Audi',
  model: 'A6 C7',
  max_speed: 232,
  Acceleration_from_standstill: 8.4,
  power: 190,
  Fuel_consumption: 4.4,
};

const car_BMW_E60 = {
  brand: 'BMW',
  model: 'E60',
  max_speed: 228,
  Acceleration_from_standstill: 8.3,
  power: 177,
  Fuel_consumption: 5.9,
};

let arr_cars2 = [];

arr_cars2[0] = car_volkswagen_passat_b7;
arr_cars2[1] = car_mercedes_vito_W447;
arr_cars2[2] = car_Audi_A6_C7;
arr_cars2[3] = car_BMW_E60;

let arr_cars = [];

arr_cars[0] = "car_volkswagen_passat_b7";
arr_cars[1] = "car_mercedes_vito_W447";
arr_cars[2] = "car_Audi_A6_C7";
arr_cars[3] = "car_BMW_E60";

console.log('Список машин нашої фірми:');
console.table(arr_cars);

console.log('------------------------------------------------');
console.log('MENU');
console.log('------------------------------------------------');
console.log('Select one of the commands:');
console.log('Command 1: comparison cars');
console.log('Command 2: Informatoin of cars');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Select command: ', (command) => {
  switch (command) {
    case '1':
      rl.question('Select car1 (0-3): ', (carIndex1) => {
        rl.question('Select car2 (0-3): ', (carIndex2) => {
          const car1 = arr_cars2[carIndex1];
          const car2 = arr_cars2[carIndex2];
          const result = compareCarsBySpeed(car1, car2);
          const result1 = compareCarsByAcceleration(car1, car2);
          console.log(result);
          console.log (result1);
          rl.close();
        });
      });
      break;

    case '2':
      rl.question('Select car (0-3): ', (carIndex) => {
        const selectedCar = arr_cars2[carIndex];
        getCarInfo(selectedCar);
        rl.close();
      });
      break;

    default:
      console.log('Invalid command.');
      rl.close();
      break;
  }
});

function compareCarsBySpeed(car1, car2) {
  if (car1.max_speed === car2.max_speed) {
    return 'Машини мають однакову максимальну швидкість.';
  } else if (car1.max_speed > car2.max_speed) {
    return `Перша машина (${car1.brand} ${car1.model}) швидша за другу (${car2.brand} ${car2.model}).`;
  } else {
    return `Друга машина (${car2.brand} ${car2.model}) швидша за першу (${car1.brand} ${car1.model}).`;
  }
}

function compareCarsByAcceleration(car1, car2) {
  if (car1.Acceleration_from_standstill === car2.Acceleration_from_standstill) {
    return 'Машини мають однакове прискорення.';
  } else if (car1.Acceleration_from_standstill > car2.Acceleration_from_standstill) {
    return `Перша машина (${car1.brand} ${car1.model}) має швидше прискорення за другу (${car2.brand} ${car2.model}).`;
  } else {
    return `Друга машина (${car2.brand} ${car2.model}) має швидше прискорення за першу (${car1.brand} ${car1.model}).`;
  }
}

function getCarInfo(car) {
  console.log(`Information of car (${car.brand} ${car.model}):`);
  console.table(car);
}