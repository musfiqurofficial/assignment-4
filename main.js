// Problem 1: radianToDegree

function radianToDegree(radian) {
    const radianCalculate = radian * 180 / Math.PI;
    let degree = radianCalculate.toFixed(2);

    if (radian === parseInt(radian) || radian === parseFloat(radian)) {
        return degree;
    } else {
        return 'Please enter a Valid Number';
    }
}

// Problem 2:  isJavaScriptFile 

function isJavaScriptFile(fileName) {
    const fileNameCheck = fileName.endsWith('.js');
    if (fileNameCheck) {
        return true;
    } else {
        return false;
    }
}

// Problem 3: oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
// Oil Price Calculation
    const totalDieselCost = dieselPrice * dieselQuantity;
    const totalPetrolCost = petrolPrice * petrolQuantity;
    const totalOctaneCost = octanePrice * octaneQuantity;
// Total Oil Price Calculation
    const totalCost = totalDieselCost + totalPetrolCost + totalOctaneCost;
// Return Total Oil Price
    if (dieselQuantity === parseInt(dieselQuantity) && petrolQuantity === parseInt(petrolQuantity) && octaneQuantity === parseInt(octaneQuantity)) {
        return totalCost;
    } else {
        return 'Please enter a Valid Number';
    }

}

// Problem 4: publicBusFare

function publicBusFare(peopleQuantity) {
    const busCapasity = 50;
    const microBusCapasity = 11;
    const publicBusFare = 250;
// Bus and MicroBus count and rest people Calculation
    let restPeople = peopleQuantity % busCapasity;
    let restPeopleFere = restPeople % microBusCapasity;
// Rest people Fare Calculation 
    let totalFera = restPeopleFere * publicBusFare;
// Return Total Fare
    if (peopleQuantity === parseInt(peopleQuantity)) {
        return totalFera;
    } else {
        return 'Please enter a Valid Number';
    }
}

// Problem 5: isBestFriend

function isBestFriend(me = { name: 'tom', friend: 'rock' }, myFriend = { name: 'rock', friend: 'tom' }) {

    if (me.name === myFriend.friend && me.friend === myFriend.name) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isBestFriend());