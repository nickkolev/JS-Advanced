function addItem() {

    let itemsElement = document.getElementById('items');
    let newItem = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = newItem.value;

    itemsElement.appendChild(liElement);
}