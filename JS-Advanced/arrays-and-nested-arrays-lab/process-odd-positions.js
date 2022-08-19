function processOddPositions(input) {   //first way
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 1) {
            result.push(input[i] * 2);
        }
    }
    result.reverse().join(" ")
    return result;
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])
//.........................................

function processOddPositions(nums) {   //second way
    const odd = nums.filter((x, i) => i % 2);
    const doubled = odd.map(x => x * 2);
    doubled.reverse().join(" ");
    return doubled.join(" ");
    //console.log(doubled.join(" "));
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])

//.........................................

const processOddPositions = (nums) => nums   //third way
    .filter((x, i) => i % 2) //you can use _ instead of x in this case
    .map(x => x * 2)
    .reverse()
    .join(" ");
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])