function solve(arr) {

    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        if(index % 2 == 0) {
            newArray.push(arr[index]);
        }
    }

    console.log(newArray.join(" "));
}

solve(['20', '30', '40', '50', '60'])