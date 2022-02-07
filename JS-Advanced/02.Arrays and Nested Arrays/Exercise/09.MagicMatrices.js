function solve(matrix) {
  let isMagic = true;
  let rowSum = 0;
  matrix[0].forEach((el) => (rowSum += el));

  for (let i = 0; i < matrix.length; i++) {
    let columnSun = 0;
    let currentRowSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      columnSun += matrix[j][i];
      currentRowSum += matrix[i][j];
    }
    if (columnSun != rowSum || currentRowSum != rowSum) {
      isMagic = false;
      break;
    }
  }
  console.log(isMagic);
}

solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
