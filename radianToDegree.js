// Problem:2 radianToDegree

function radianToDegree(radian) {
    const radianCalculate = radian * 180 / Math.PI;
    let degree = radianCalculate.toFixed(2);

    if (radian === parseInt(radian) || radian === parseFloat(radian)) {
        return degree;
    } else {
        return 'Please enter a Valid Number';
    }
}