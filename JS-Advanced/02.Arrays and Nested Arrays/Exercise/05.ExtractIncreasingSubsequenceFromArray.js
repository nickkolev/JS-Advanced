function solve(array) {

    let result = [array[0]];
    array.reduce((a,b) => {
        if(b >= result[result.length - 1]) {
            result.push(b);
        }
    })

    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])