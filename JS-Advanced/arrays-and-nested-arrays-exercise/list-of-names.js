function listOfNames(names) {   //first way
    let sorted = names.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])
//........................................................

function listOfNames(names) {   //second way
    let sorted = names.sort((a, b) => a.localeCompare(b));
    let num = 1;
    sorted.forEach((name) => {
        console.log(`${num}.${name}`);
        num++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"])