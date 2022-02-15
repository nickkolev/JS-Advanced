function solve() {

  let textToTransformElement = document.getElementById('text');
  let namingConventionElement = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');

  let arr = textToTransformElement.value.split(' ');
  let result = '';

  if (namingConventionElement.value === 'Camel Case') {
    result += (arr[0].toLowerCase());
    for (let i = 1; i < arr.length; i++) {
      result += (arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase());
    }
  } else if (namingConventionElement.value === 'Pascal Case') {
    result += (arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase());
    for (let i = 1; i < arr.length; i++) {
      result += (arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase());
    }
  } else {
    result = 'Error!';
  }

  resultElement.textContent = result;
}