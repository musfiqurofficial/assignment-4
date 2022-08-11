/* 
Problem 3: oilPrice
ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 
ভিডিও ভালো করে দেখবে। 

* প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
* প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
* প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 
*/

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
console.log(oilPrice(30, 20, 10));
