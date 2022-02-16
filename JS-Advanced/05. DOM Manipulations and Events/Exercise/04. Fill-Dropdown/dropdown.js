function addItem() {
    const newTextElement = document.getElementById('newItemText');
    const newValueElement = document.getElementById('newItemValue');
    const text = newTextElement.value;
    const value = newValueElement.value;

    const optionElement = document.createElement('option');
    optionElement.textContent = text;
    optionElement.value = value;

    document.getElementById('menu').appendChild(optionElement);

    newTextElement.value = '';
    newValueElement.value = '';
}