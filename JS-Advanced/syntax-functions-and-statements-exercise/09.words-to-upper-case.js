function wordsToUpperCase(words) {
    return words.match(/\w+/g).join(', ').toUpperCase();
}
console.log(wordsToUpperCase('Hi, how are you?'))
console.log(wordsToUpperCase('Hello, what are you doing?'))