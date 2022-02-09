function solve(car) {

    let resultCar = {};
    resultCar.model = car.model;

    let engine = {};
    if(car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    }else if(car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }
    resultCar.engine = engine;

    let carriage = {};
    carriage.type = car.carriage;
    carriage.color = car.color;
    resultCar.carriage = carriage;

    if(car.wheelsize % 2 == 0){
        car.wheelsize--;
    }
    let wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];
    resultCar.wheels = wheels;

  return resultCar;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);
