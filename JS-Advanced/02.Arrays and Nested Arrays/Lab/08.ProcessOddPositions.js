function solve(numbers) {

    let result = [];
    for (let i = 1; i < numbers.length; i+=2) {
        result.push(numbers[i] * 2);
    }
    result.reverse();
    return result.join(" ")

}

console.log(solve([3, 0, 10, 4, 7, 3]))