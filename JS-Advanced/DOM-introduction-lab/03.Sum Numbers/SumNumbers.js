function calc() {
    let firstNumberElement = document.getElementById('num1');
    let secondNumberElement = document.getElementById('num2');
    let sumElement = document.getElementById('sum');
    let firstNum = firstNumberElement.value;
    let secondNum = secondNumberElement.value;
    sumElement.value = Number(firstNum) + Number(secondNum);
}
