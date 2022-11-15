
function addItem() {
    let list = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let inputValue = inputElement.value;
    let newItem = document.createElement('li');
    newItem.textContent = inputValue;
    list.appendChild(newItem);
    inputElement.value = '';
}