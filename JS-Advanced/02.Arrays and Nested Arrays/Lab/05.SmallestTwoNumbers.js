function solve(arr) {
    let result = arr.sort((a,b) => a - b).slice(0, 2);

    console.log(result.join(" "))
}

solve([3, 0, 10, 4, 7, 3])