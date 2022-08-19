function sumTable() {
    let sumElement = document.getElementById('sum');
    let rows = document.querySelectorAll('tr td')
   // console.log(sumElement);
    let sum = 0;
    for (let i = 0; i < rows.length-2; i++) {
       if (i%2 ==!0) {
        sum += Number(rows[i].textContent)
       // console.log(rows[i]);
       }
    }
    sumElement.textContent = sum
   // console.log(sum);
}