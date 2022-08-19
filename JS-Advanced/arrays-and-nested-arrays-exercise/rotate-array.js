function rotateArray(array, rotator){
    let result = array;
    for (let i = 0; i < rotator; i++) {
        let element = result.pop();
        result.unshift(element);
    }
    console.log(result.join(" "));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2)
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)