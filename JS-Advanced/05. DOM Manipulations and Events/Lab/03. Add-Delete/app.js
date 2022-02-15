function addItem() {
    let itemsElement = document.getElementById('items');
    let inputTextElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputTextElement.value;
    inputTextElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]'
    deleteElement.addEventListener('click', function() {
        this.parentElement.remove();
        //e.currentTarget.parentElement.remove();
    })

    if(liElement.textContent !== '') {
        liElement.appendChild(deleteElement);
        itemsElement.appendChild(liElement);
    }
}