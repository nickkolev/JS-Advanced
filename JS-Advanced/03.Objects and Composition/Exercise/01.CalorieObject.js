function solve(input) {
    
    let object = {};
    let inputL = input.length;
    for (let i = 0; i < inputL; i+=2) {
        let food = input[i];
        let calories = Number(input[i + 1]);

        object[food] = calories;
    }

    console.log(object);
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])