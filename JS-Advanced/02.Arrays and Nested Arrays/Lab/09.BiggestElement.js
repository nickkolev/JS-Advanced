function solve(matrix) {
  let biggestNumbers = [];
  matrix.forEach((arr) => {
    biggestNumbers.push(arr.sort((a, b) => b - a).shift());
  });

  return biggestNumbers.sort((a, b) => b - a).shift();
}

console.log(
  solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);
