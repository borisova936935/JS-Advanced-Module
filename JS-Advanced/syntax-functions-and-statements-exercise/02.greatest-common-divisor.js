function greatestCommonDivisor(firstNum, secondNum) {   //first way
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)
//......................................................
function greatestCommonDivisor(a, b) {  //second way
    if (b) {
        return greatestCommonDivisor(b, a % b)
    }else{
        console.log(a);
    }
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)

//