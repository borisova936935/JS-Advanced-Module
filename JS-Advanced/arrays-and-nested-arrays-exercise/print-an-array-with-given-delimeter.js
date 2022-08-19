function printAnArrayWithGivenDelimeter(arr, delimeter) {
    let joined = arr.join(delimeter);
    console.log(joined);
}
printAnArrayWithGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')
printAnArrayWithGivenDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_')