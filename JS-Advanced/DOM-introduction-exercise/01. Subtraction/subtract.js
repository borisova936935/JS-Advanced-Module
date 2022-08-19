function subtract() {
    let firstNumberElement = Number(document.getElementById('firstNumber').value);
    let secondNumberElement = Number(document.getElementById('secondNumber').value);
    let resultElement = document.getElementById('result');
    resultElement.textContent = firstNumberElement - secondNumberElement;
} 