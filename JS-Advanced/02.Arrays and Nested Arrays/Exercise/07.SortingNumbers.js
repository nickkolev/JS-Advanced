function solve(array) {

    let result = [];
  while (array.length > 0) {
    let min = Math.min(...array);
    let minIndex = array.indexOf(min);
    array.splice(minIndex, 1);
    if(array.length == 0) {
        result.push(min);
        break;
    }
    let max = Math.max(...array);
    let maxIndex = array.indexOf(max);
    array.splice(maxIndex, 1);

    result.push(min, max);
  }

  return result;
}

solve([1, 65, 3, 52, 63, 31, -3, 18, 56]);
