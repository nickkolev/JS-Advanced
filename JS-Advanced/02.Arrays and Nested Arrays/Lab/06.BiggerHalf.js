function solve(numbers) {
    let result = numbers.sort((a,b) => b - a).slice(0, Math.ceil(numbers.length / 2)).reverse();

    return result
}

solve([3, 19, 14, 7, 2, 19, 6])
solve([4, 7, 2, 5])