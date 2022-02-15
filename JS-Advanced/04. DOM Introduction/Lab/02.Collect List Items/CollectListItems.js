function extractText() {
    
    let items = Array.from(document.querySelectorAll('#items li'));

    let result = '';
    for (const item of items) {
        result += item.textContent + '\n';
    }

    document.getElementById('result').value = result;
}