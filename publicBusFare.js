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