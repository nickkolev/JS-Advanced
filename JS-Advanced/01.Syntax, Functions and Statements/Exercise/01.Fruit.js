function solve(type, weight, price) {

    let weightInKilos = weight / 1000;
    let money = price * weightInKilos;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${type}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)