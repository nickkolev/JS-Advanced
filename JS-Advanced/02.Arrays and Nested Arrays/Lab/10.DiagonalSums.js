function solve(matrix) {

    let mainSum = 0;
    let reverseSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i == j) {
                mainSum += matrix[i][j];
            }
            if((i + j) === (matrix.length - 1)) {
                reverseSum += matrix[i][j];
            }
        }
    }

    console.log(mainSum, reverseSum);
}

solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
