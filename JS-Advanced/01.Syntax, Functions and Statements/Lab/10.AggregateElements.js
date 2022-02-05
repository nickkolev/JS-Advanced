function solve(elements) {
  console.log(sum(elements));
  console.log(inverseSum(elements));
  console.log(concat(elements));

  function sum(elements) {
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
      sum += elements[i];
    }

    return sum;
  }

  function inverseSum(elements) {
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
      sum += 1 / elements[i];
    }

    return sum;
  }

  function concat(elements) {
    let string = "";
    for (let i = 0; i < elements.length; i++) {
      string += elements[i];
    }

    return string;
  }
}

solve([1, 2, 3]);
