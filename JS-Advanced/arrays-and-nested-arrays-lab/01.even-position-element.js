function evenPositionElement(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result.push(input[i]);
        }

    }
    console.log(result.join(" "));
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);

function solve(array) {
    let result = [];
    for (let element of array) {
        if (array.indexOf(element) % 2 == 0) {
            result.push(element);
        }
    }
    console.log(result.join(' '));
    
}
solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);