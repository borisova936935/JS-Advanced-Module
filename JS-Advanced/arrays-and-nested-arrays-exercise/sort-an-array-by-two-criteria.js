function sortAnArrayBy2Criteria(input) {   //first way
    let sortedArr = (current, next) =>
        current.length - next.length || current.localeCompare(next);
    input.sort(sortedArr);
    console.log(input.join('\n'));
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma'])

sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])

sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'])

//......................................................................

function sortAnArrayBy2Criteria(arr) {   //second way
    arr.sort(twoCriteriaSort);
    return arr.join("\n")
    function twoCriteriaSort(current, next) {
        //sort
        if (current.length === next.length) {
            //implement second criteria
            return current.localeCompare(next)
        }
        return current.length - next.length;
    }
}

sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma'])

sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])

sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'])
