function magicMatrices(matrix) {   //first way
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix[0].length; i++) {
        let currentColSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentColSum += matrix[j][i];
        }
        if (currentColSum !== sum) {
            return false;
        }
    }
    return true;
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])

//..................................................................

function magicMatrices(matrix) {   //second way
    let isMagic = true;

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRowTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[i][j];
            sumColTwo += matrix[i + 1][j];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagic = false;
        }
    }
    return isMagic;
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])