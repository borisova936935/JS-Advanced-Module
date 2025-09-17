function lastKNumberSequence(n, k){
    let result = [1];
    for (let i = 0; i < n - 1; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let element of lastK) {
            sum += element;
        }
        result.push(sum)
    }
   return result;
}
lastKNumberSequence(6, 3)
lastKNumberSequence(8, 2)
