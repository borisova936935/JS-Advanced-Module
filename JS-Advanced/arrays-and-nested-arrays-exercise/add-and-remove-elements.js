function addAndRemoveElements(input) {
    let init = 1;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === "add") {
            result.push(init);
        } else if (command === "remove") {
            result.pop();
        }
        init++
    }
    if (result.length < 1) {
        console.log("Empty");
    } else {
        for (const element of result) {
            console.log(element);
        }
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add'])

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])

addAndRemoveElements(['remove',
    'remove',
    'remove'])