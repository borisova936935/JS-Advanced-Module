function stringLength(str1, str2, str3){
    let length1 = Number(str1.length);
    let length2 = Number(str2.length);
    let length3 = Number(str3.length);
    
    let sum = length1 + length2 + length3;
    let avg = Math.floor((length1 + length2 + length3)/3);

    console.log(sum);
    console.log(avg);
}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')