function solve(n, k) {

    let arr = [1];

    for(let i = 1; i < n; i++) {
        let sum = 0;

        for(let j = i - 1; j >= i - k; j--) {
            if (arr[j] >= 0) {
                sum += arr[j];                
            }
        }
        arr.push(sum);
    }

    console.log(arr);
}

solve(6, 3)