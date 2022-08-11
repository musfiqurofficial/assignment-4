// Problem:2 radianToDegree

function radianToDegree(radian) {
    const radianCalculate = radian * 180 / Math.PI;
    let degree = radianCalculate.toFixed(2);
    return degree;
}
console.log(radianToDegree(199));