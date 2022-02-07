function solve(input) {
  let field = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let isVictory = false;

  let player = "X";
  for (let i = 0; i < input.length; i++) {
    let coords = input[i].split(" ");
    let row = coords[0];
    let column = coords[1];

    if (field[row][column] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    } else {
      field[row][column] = player;
      player = switchPlayer(player);
    }

    if (
      checkColumn(i, field) ||
      checkRow(i, field) ||
      checkLeftDiagonal(field) ||
      checkRightDiagonal(field)
    ) {
      isVictory = true;
    }
  }
  if (!isVictory) {
    console.log("The game ended! Nobody wins :(");
  } else {
    playerOnMove = switchPlayer(playerOnMove);
    console.log(`Player ${playerOnMove} wins!`);
  }
  console.log(`${field[0][0]}\t${field[0][1]}\t${field[0][2]}`);
  console.log(`${field[1][0]}\t${field[1][1]}\t${field[1][2]}`);
  console.log(`${field[2][0]}\t${field[2][1]}\t${field[2][2]}`);

  console.log(field.join("\n"));

  function switchPlayer(player) {
    return player === "X" ? "O" : "X";
  }

  function checkColumn(colIndex, fieldm = []) {
    if (
      fieldm[0][colIndex] === "X" &&
      fieldm[1][colIndex] === "X" &&
      fieldm[2][colIndex] === "X"
    ) {
      return true;
    }
    if (
      fieldm[0][colIndex] === "O" &&
      fieldm[1][colIndex] === "O" &&
      fieldm[2][colIndex] === "O"
    ) {
      return true;
    }
    return false;
  }

  function checkRow(rowIndex, fieldm = []) {
    if (
      fieldm[rowIndex][0] === "X" &&
      fieldm[rowIndex][1] === "X" &&
      fieldm[rowIndex][2] === "X"
    ) {
      return true;
    }
    if (
      fieldm[rowIndex][0] === "O" &&
      fieldm[rowIndex][1] === "O" &&
      fieldm[rowIndex][2] === "O"
    ) {
      return true;
    }
    return false;
  }

  function checkLeftDiagonal(fieldm = []) {
    if (fieldm[0][0] === "X" && fieldm[1][1] === "X" && fieldm[2][2] === "X") {
      return true;
    }
    if (fieldm[0][0] === "O" && fieldm[1][1] === "O" && fieldm[2][2] === "O") {
      return true;
    }
    return false;
  }

  function checkRightDiagonal(fieldm = []) {
    if (fieldm[0][2] === "X" && fieldm[1][1] === "X" && fieldm[2][0] === "X") {
      return true;
    }
    if (fieldm[0][2] === "O" && fieldm[1][1] === "O" && fieldm[2][0] === "O") {
      return true;
    }
    return false;
  }
}

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
