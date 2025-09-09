function sumOfNumbersNtoM(num1, num2) {
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let result = 0
   
    for (let index = firstNum; index <= secondNum; index++) {
        result += Number(index)

    }
    
    console.log(result);
}
sumOfNumbersNtoM('1', '5')
sumOfNumbersNtoM('-8', '-20')