'use strict';


// CRUDL - Create, Read, Update, Delete, List

var gCars;

function createCars() {
    gCars = [createCar('Audu', 677), createCar('Suzuli', 120), createCar('Fiak Umu', 233)]
}


function createCar(vendor, maxSpeed) {
    return {
        id: makeId(),
        vendor: vendor,
        maxSpeed: maxSpeed
    }
}


function getCars() {
    return gCars;
}

function getCarById(carId) {
    return gCars.find(function(car){
        return car.id === carId;
    })
}

function deleteCar(carId) {
    var carIdx = gCars.findIndex(function(car){
        return car.id === carId;
    })
    gCars.splice(carIdx, 1)

}

function addCar(car) {
    gCars.push(car);
}

function updateCar(carId, newSpeed) {
    var carIdx = gCars.findIndex(function(car){
        return car.id === carId;
    })
    gCars[carIdx].maxSpeed = newSpeed;
}

// function updateCar(car) {
//     var carIdx = gCars.findIndex(function(car){
//         return car.id === carId;
//     })
//     gCars[carIdx] = car;
// }





