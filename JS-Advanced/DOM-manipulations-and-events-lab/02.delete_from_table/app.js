function deleteByEmail() {

    let email = document.getElementsByName('email')[0].value;

    let tableCells = document
        .querySelectorAll('#customers td:nth-child(2)');

    let found = false;

    for (const cell of tableCells) {
        if (cell.textContent == email) {
            cell.parentElement.remove();
            found = true;
        }
    }
    
    let result = document.getElementById('result');
    
    result.textContent = found ? 'Deleted.' : 'Not found.';
}
