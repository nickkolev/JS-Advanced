function toggle() {

    let buttonElement = document.getElementsByClassName('button')[0];
    let hiddenElement = document.querySelector('#extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less'
        hiddenElement.style.display = 'block';
    } else if (buttonElement.textContent === 'Less') {
        buttonElement.textContent = 'More'
        hiddenElement.style.display = 'none';
    }
}