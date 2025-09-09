function agreggateElements(input) {
    let sum = 0;
    let sum1a = 0;
    let concatSum = input.join("");

    for (let i = 0; i < input.length; i++) {
      sum += input[i];  
    }

    for (let i = 0; i < input.length; i++) {
        sum1a += 1/input[i];
    }
    
    console.log(sum);
    console.log(sum1a);
    console.log(concatSum);
}
agreggateElements([1, 2, 3])
agreggateElements([2, 4, 8, 16])