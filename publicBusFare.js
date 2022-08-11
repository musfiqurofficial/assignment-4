// Problem 4: publicBusFare

function publicBusFare(peopleQuantity) {
    const busCapasity = 50;
    const microBusCapasity = 11;
    const publicBusFare = 250;

    let restPeople = peopleQuantity % busCapasity;
    let restPeopleFere = restPeople % microBusCapasity;

    let totalFera = restPeopleFere * publicBusFare;

    if (peopleQuantity === parseInt(peopleQuantity)) {
        return totalFera;
    } else {
        return 'Please enter a Valid Number';
    }
}