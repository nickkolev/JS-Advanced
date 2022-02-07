function solve(arr) {
  let number = 0;
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    number += 1;
    if (command == "add") {
      resultArray.push(number);
    } else if (command == "remove") {
      resultArray.pop();
    }
  }

  if (!resultArray.length) {
    console.log("Empty");
  } else {
    console.log(resultArray.join("\n"));
  }
}

solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
