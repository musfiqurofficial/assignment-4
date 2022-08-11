// Problem 3: oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const totalDieselCost = dieselPrice * dieselQuantity;
    const totalPetrolCost = petrolPrice * petrolQuantity;
    const totalOctaneCost = octanePrice * octaneQuantity;

    const totalCost = totalDieselCost + totalPetrolCost + totalOctaneCost;

    if (dieselQuantity === parseInt(dieselQuantity) && petrolQuantity === parseInt(petrolQuantity) && octaneQuantity === parseInt(octaneQuantity)) {
        return totalCost;
    } else {
        return 'Please enter a Valid Number';
    }

}
