function extractIncreasingSubsequenceFromArray(array) {
    let result = array.reduce((arr, current) => {
        if (arr.length) {
            if (current >= arr[arr.length - 1]) {
                arr.push(current);
            }
        } else {
            arr.push(current);
        }
        return arr;
    }, []);
    return result;
}
extractIncreasingSubsequenceFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])

extractIncreasingSubsequenceFromArray([
    1,
    2,
    3,
    4])

extractIncreasingSubsequenceFromArray([
    20,
    20, 
    20, 
    20, 
    20, 
    20, 
    20, 
    20, 
    3, 
    31])
