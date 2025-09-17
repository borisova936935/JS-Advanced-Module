function sumFirstLast(input) {   //first way
    let sum = Number(input[0]) + Number(input[input.length - 1]);
    console.log(sum);
}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])

//.....................................................................

function sumFirstLast(numAsString) {   //second way
    let first = [...numAsString].shift();
    let last = [...numAsString].pop();
    let result = Number(first) + Number(last);
    console.log(result);
}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])
