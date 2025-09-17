function negativePositiveNumbers(array) {   //first way
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0){
            newArray.push(array[i]);
        }else{
            newArray.unshift(array[i]);
        }
    }
    for(let number of newArray){
        console.log(number);
    }
}
negativePositiveNumbers([7, -2, 8, 9])
negativePositiveNumbers([3, -2, 0, -1])

//.............................................

function negativePositiveNumbers(nums) {   //second way
    const result = [];
    for (const num of nums) {
        if(num<0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    console.log(result.join("\n"));
}
negativePositiveNumbers([7, -2, 8, 9])
negativePositiveNumbers([3, -2, 0, -1])