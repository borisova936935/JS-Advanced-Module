function sameNumbers(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sumOfDigits = 0;
    let digitToCompare = Number(inputNumber[0]);
    const numbersLength = inputNumber.length;

    for (let i = 0; i < numbersLength; i++) {
        let currentDigit = Number(inputNumber[i]);
        sumOfDigits += Number(inputNumber[i]);
       if (currentDigit !== digitToCompare) {
           isSame = false;
       }
    }
    console.log(isSame);
    console.log(sumOfDigits);
}
sameNumbers(2222222)
sameNumbers(1234)