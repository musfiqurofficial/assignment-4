// Problem 3: oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalDieselCost = dieselPrice * dieselQuantity;
    const totalPetrolCost = petrolPrice * petrolQuantity;
    const totalOctaneCost = octanePrice * octaneQuantity;

    const totalCost = totalDieselCost + totalPetrolCost + totalOctaneCost;
    return totalCost;
}
console.log(oilPrice(0, 2, 3));
