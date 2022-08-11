// Problem 4: publicBusFare

function publicBusFare(peopleQuantity) {
    const busCapasity = 50;
    const microBusCapasity = 11;
    const publicBusTicketPrice = 250;

    let busCount = peopleQuantity / busCapasity;
    let busVagshes = peopleQuantity % busCapasity;

    let microBusCount = busVagshes / microBusCapasity;
    let microBusVagshes = busVagshes % microBusCapasity;

    let price = microBusVagshes * publicBusTicketPrice;
    return price;
}
console.log(publicBusFare(12));