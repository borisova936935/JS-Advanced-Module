function biggestElement(matrix) {
    let result = [];
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            result.push(matrix[row][col]);
        }
    }
    result.sort((a, b) => b-a)
    return result[0];
    // console.log(result[0]);
}
biggestElement([[20, 50, 10],
[8, 33, 145]])

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])

biggestElement([[-3, -5, -7], [-1, -9, -50], [-16, -78, -99]])